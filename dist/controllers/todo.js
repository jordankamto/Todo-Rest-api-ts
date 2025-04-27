"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        if (todos.length === 0) {
            const error = {
                message: "No Todos found",
                status: 404,
                data: "",
            };
            throw error;
        }
        res
            .status(200)
            .json({ message: "All Todos were fetched successfully", data: todos });
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.getTodos = getTodos;
const getTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Get a todo by id" });
});
exports.getTodo = getTodo;
const addTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Add a todo" });
});
exports.addTodo = addTodo;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Update a todo by id" });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Delete a todo by id" });
});
exports.deleteTodo = deleteTodo;
