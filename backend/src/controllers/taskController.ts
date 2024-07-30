import { AuthRequest } from "../middleware/authMiddleware";
import Tasks from "../models/Tasks";
import User from "../models/User";
import { taskSchema } from "../schemas/taskSchema";
import { Response } from "express";

export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, status, priority, deadline } = taskSchema.parse(
      req.body
    );
    const userId = req.userId;

    let newTask = new Tasks({
      title,
      description,
      status,
      priority,
      deadline,
      user: userId,
    });
    await newTask.save();

    await User.findByIdAndUpdate(userId, { $push: { tasksId: newTask._id } });
    return res.status(201).json({
      message: "Task createdd successfully",
      newTask,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occured while creating task", error });
  }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const tasks = await Tasks.find({ user: userId });
    return res.status(201).json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occured while fetching tasks", error });
  }
};

export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, status, priority, deadline } = req.body;
    const { id } = req.params;

    const updatedTask = await Tasks.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
        priority,
        deadline,
      },
      { runValidators: true }
    );

    return res.status(201).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occured while updating the task", error });
  }
};
