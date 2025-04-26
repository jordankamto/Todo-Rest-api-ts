"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = void 0;
const getTodos = (req, res, next) => {
    res.status(200).json({ message: "Get all todos" });
};
exports.getTodos = getTodos;
