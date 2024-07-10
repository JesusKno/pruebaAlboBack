import express from "express";
import { deleteTask, getAllTasks, saveNewTask, updateTask } from "../controllers/tasksController.js";


const router = express.Router()


router.get("/task/list", getAllTasks)
router.post("/new/task", saveNewTask)
router.put("/update/task/:id", updateTask)
router.delete("/delete/task/:id", deleteTask)

export default router