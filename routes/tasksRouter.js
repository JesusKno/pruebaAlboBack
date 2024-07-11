import express from "express";
import taskDataValidator from "../validators/taskValidator.js";
import { deleteTask, getAllTasks, saveNewTask, updateTask } from "../controllers/tasksController.js";


const router = express.Router()


router.get("/task/list", getAllTasks)
router.post("/new/task", taskDataValidator, saveNewTask)
router.put("/update/task/:id", taskDataValidator, updateTask)
router.delete("/delete/task/:id", deleteTask)

export default router