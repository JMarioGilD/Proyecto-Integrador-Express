const express = require('express');
const router = express.Router();

module.exports = function (tasks) {
  // Ruta para listar las tareas completas
  router.get('/completas', (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks);
  });

  // Ruta para listar las tareas incompletas
  router.get('/incompletas', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.isCompleted);
    res.json(incompleteTasks);
  });

  return router;
};
