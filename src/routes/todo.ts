import { Router } from "express";
import { body } from "express-validator";
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
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
  [
    body("completed")
      .trim()
      .isBoolean()
      .withMessage("Invalid completed value"),
  ],
  updateTodo
);
router.patch(
  "/:id",
  [body("text").trim().isLength({ min: 1 }).withMessage("No text was found")],
  patchTodo
);
router.delete("/:id", deleteTodo);

export default router;
