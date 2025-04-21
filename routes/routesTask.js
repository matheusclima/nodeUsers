const express = require('express');
const taskControl = require('../controller/taskController');

const router = express.Router();

router.get("/", taskControl.funcHello);
router.get("/tasks", taskControl.funcGetTasks);
router.get("/tasks/:id", taskControl.funcGetTaskById);
router.post("/tasks", taskControl.funcCreateTask);
router.delete("/tasks/:id", taskControl.funcDeleteTask);
module.exports = router;