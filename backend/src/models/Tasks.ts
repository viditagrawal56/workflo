import mongoose, { Schema } from "mongoose";

interface ITaskSchema {
  title: string;
  description?: string;
  status: string;
  priority?: "Low" | "Medium" | "Urgent";
  deadline?: Date;
  user: mongoose.Types.ObjectId;
}

const TaskSchema: Schema = new Schema<ITaskSchema>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["todo", "under-review", "in-progress", "done"],
    default: "todo",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "Urgent"],
  },
  deadline: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<ITaskSchema>("Tasks", TaskSchema);
