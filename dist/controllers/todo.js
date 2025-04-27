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
exports.deleteTodo = exports.patchTodo = exports.updateTodo = exports.addTodo = exports.getTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const express_validator_1 = require("express-validator");
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
    try {
        const { id } = req.params;
        const todo = yield todo_1.default.findById(id);
        if (!todo) {
            const error = {
                message: "Todo not found",
                status: 404,
                data: "",
            };
            throw error;
        }
        res
            .status(200)
            .json({ message: "Todo was fetched successfully", data: todo });
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.getTodo = getTodo;
const addTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = {
                message: "Validation failed",
                status: 422,
                data: errors.array()[0].msg,
            };
            throw error;
        }
        const { text } = req.body;
        const todo = new todo_1.default({ text });
        const result = yield todo.save();
        res.status(201).json({
            message: "Todo was created successfully",
            data: result,
        });
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = {
                message: "Validation failed",
                status: 422,
                data: errors.array()[0].msg,
            };
            throw error;
        }
        const { id } = req.params;
        const { completed } = req.body;
        const todo = yield todo_1.default.findById(id);
        if (!todo) {
            const error = {
                message: "Todo not found",
                status: 404,
                data: "",
            };
            throw error;
        }
        todo.completed = completed;
        const result = yield todo.save();
        res
            .status(200)
            .json({ message: "Todo was updated successfully", data: result });
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.updateTodo = updateTodo;
const patchTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = {
                message: "Validation failed",
                status: 422,
                data: errors.array()[0].msg,
            };
            throw error;
        }
        const { id } = req.params;
        const { text } = req.body;
        const todo = yield todo_1.default.findById(id);
        if (!todo) {
            const error = {
                message: "Todo not found",
                status: 404,
                data: "",
            };
            throw error;
        }
        todo.text = text;
        const result = yield todo.save();
        res
            .status(200)
            .json({ message: "Todo was patched successfully", data: result });
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.patchTodo = patchTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        if (!error.status) {
            error.status = 500;
        }
        next(error);
    }
});
exports.deleteTodo = deleteTodo;
