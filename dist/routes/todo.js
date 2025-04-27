"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
router.get("/", todo_1.getTodos);
router.get("/:id", todo_1.getTodo);
router.post("/", [(0, express_validator_1.body)("text").trim().isLength({ min: 1 }).withMessage("No text was found")], todo_1.addTodo);
router.put("/:id", [
    (0, express_validator_1.body)("completed")
        .trim()
        .isBoolean()
        .withMessage("Invalid completed value"),
], todo_1.updateTodo);
router.patch("/:id", [(0, express_validator_1.body)("text").trim().isLength({ min: 1 }).withMessage("No text was found")], todo_1.patchTodo);
router.delete("/:id", todo_1.deleteTodo);
exports.default = router;
