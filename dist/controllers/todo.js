"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodo = exports.getTodos = void 0;
const getTodos = (req, res, next) => {
    res.status(200).json({ message: "Get all todos" });
};
exports.getTodos = getTodos;
const getTodo = (req, res, next) => {
    res.status(200).json({ message: "Get a todo by id" });
};
exports.getTodo = getTodo;
const addTodo = (req, res, next) => {
    res.status(200).json({ message: "Add a todo" });
};
exports.addTodo = addTodo;
const updateTodo = (req, res, next) => {
    res.status(200).json({ message: "Update a todo by id" });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    res.status(200).json({ message: "Delete a todo by id" });
};
exports.deleteTodo = deleteTodo;
