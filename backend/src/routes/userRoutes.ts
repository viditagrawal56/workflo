import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getUser } from "../controllers/userController";

const router = express.Router();
router.use(authMiddleware);

router.get("/profile", getUser);
export default router;
