import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createTask,
  getTasks,
  updateTask,
} from "../controllers/taskController";

const router = express.Router();
router.use(authMiddleware);

router.post("/createTask", createTask);
router.get("/getTasks", getTasks);
router.post("/updateTask/:id", updateTask);

export default router;
