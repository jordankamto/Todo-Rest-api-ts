"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = (req, res, next) => {
    res.status(200).json({ message: "Get all users" });
};
exports.getUsers = getUsers;
