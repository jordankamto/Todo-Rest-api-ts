import mongoose, { Schema } from "mongoose";
import { Todo } from "../types/types";

const todoSchema = new Schema<Todo>(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model<Todo>("Todo", todoSchema);
export default TodoModel;
