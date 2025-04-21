const taskServ = require('../services/taskService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetTasks = taskServ.getAllTasks;
exports.funcGetTaskById = taskServ.getTaskById;
exports.funcCreateTask = taskServ.createTask;
exports.funcDeleteTask = taskServ.deleteTask;

