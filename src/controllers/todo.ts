import { Request, Response, NextFunction } from "express";
import Todo from "../models/todo";
import { validationResult } from "express-validator";
import { CustomError } from "../types/types";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      const error: CustomError = {
        message: "No Todos found",
        status: 404,
        data: "",
      };
      throw error;
    }
    res
      .status(200)
      .json({ message: "All Todos were fetched successfully", data: todos });
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};
