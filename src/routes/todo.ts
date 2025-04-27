import { Router } from "express";
import { body } from "express-validator";
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post(
  "/",
  [body("text").trim().isLength({ min: 1 }).withMessage("No text was found")],
  addTodo
);
router.put(
  "/:id",
  [body("text").trim().isLength({ min: 1 }).withMessage("No text was found")],
  updateTodo
);
router.delete("/:id", deleteTodo);

export default router;
