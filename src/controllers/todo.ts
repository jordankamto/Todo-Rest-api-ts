import { Request, Response, NextFunction } from "express";
import Todo from "../models/todo";
import { validationResult } from "express-validator";

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Get all todos" });
};
export const getTodo = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Get a todo by id" });
};
export const addTodo = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Add a todo" });
};
export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Update a todo by id" });
};
export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Delete a todo by id" });
};
