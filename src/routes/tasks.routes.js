import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTaskById, getTasks, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired,getTasks);
router.post("/task", authRequired,validateSchema(createTaskSchema), createTask);
router.get("/task/:id", authRequired,getTaskById);
router.put("/task/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
