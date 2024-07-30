import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUserSchema {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  tasksId: mongoose.Types.ObjectId[];
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema<IUserSchema>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  tasksId: [{ type: Schema.Types.ObjectId, ref: "Tasks", default: [] }],
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUserSchema>("User", UserSchema);
