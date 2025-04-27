import { Request, Response, NextFunction } from "express";
import Todo from "../models/todo";
import { validationResult } from "express-validator";
import { CustomError, params, body } from "../types/types";

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
    const { id } = req.params as params;
    const todo = await Todo.findById(id);
    if (!todo) {
      const error: CustomError = {
        message: "Todo not found",
        status: 404,
        data: "",
      };
      throw error;
    }
    res
      .status(200)
      .json({ message: "Todo was fetched successfully", data: todo });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: CustomError = {
        message: "Validation failed",
        status: 422,
        data: errors.array()[0].msg,
      };
      throw error;
    }
    const { text } = req.body as body;
    const todo = new Todo({ text });
    const result = await todo.save();
    res.status(201).json({
      message: "Todo was created successfully",
      data: result,
    });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: CustomError = {
        message: "Validation failed",
        status: 422,
        data: errors.array()[0].msg,
      };
      throw error;
    }
    const { id } = req.params as params;
    const { completed } = req.body as body;
    const todo = await Todo.findById(id);
    if (!todo) {
      const error: CustomError = {
        message: "Todo not found",
        status: 404,
        data: "",
      };
      throw error;
    }
    todo.completed = completed;
    const result = await todo.save();
    res
      .status(200)
      .json({ message: "Todo was updated successfully", data: result });
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};

export const patchTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: CustomError = {
        message: "Validation failed",
        status: 422,
        data: errors.array()[0].msg,
      };
      throw error;
    }
    const { id } = req.params as params;
    const { text } = req.body as body;
    const todo = await Todo.findById(id);
    if (!todo) {
      const error: CustomError = {
        message: "Todo not found",
        status: 404,
        data: "",
      };
      throw error;
    }
    todo.text = text;
    const result = await todo.save();
    res
      .status(200)
      .json({ message: "Todo was patched successfully", data: result });
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
    const { id } = req.params as params;
    const todo = await Todo.findById(id);
    if (!todo) {
      const error: CustomError = {
        message: "Todo not found",
        status: 404,
        data: "",
      };
      throw error;
    }
    const result = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      message: "Todo was deleted successfully",
      data: result,
    });
  } catch (error) {
    if (!(error as CustomError).status) {
      (error as CustomError).status = 500;
    }
    next(error);
  }
};
