"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
router.get('/', todo_1.getTodos);
exports.default = router;
