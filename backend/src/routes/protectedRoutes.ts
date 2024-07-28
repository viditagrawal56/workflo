import express, { Request, Response } from "express";
import { authMiddleware, AuthRequest } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/profile", authMiddleware, (req: AuthRequest, res: Response) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

export default router;
