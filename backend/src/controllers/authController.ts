import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { loginSchema, registerSchema } from "../schemas/authSchema";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = registerSchema.parse(req.body);

    let existigUser = await User.findOne({ email });
    if (existigUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    return res.status(500).send("Error during registering");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      path: "/",
      sameSite: "none",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60), //expires after 1hr
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    return res.status(500).send({ message: "Error logging in", err });
  }
};
