import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.string().min(1, "Status is required"),
  priority: z.enum(["Low", "Medium", "Urgent"]).optional(),
  deadline: z.date().optional(),
  user: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
});
