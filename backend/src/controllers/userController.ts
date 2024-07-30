import { Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

export const getUser = async (req: AuthRequest, res: Response) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User retrieved",
      user: {
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occured while fetching user details", error });
  }
};
