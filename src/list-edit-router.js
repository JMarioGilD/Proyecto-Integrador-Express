const express = require('express');
const router = express.Router();

module.exports = function (tasks) {
  // Ruta para crear una tarea (POST)
  router.post('/crear', (req, res) => {
    // Inicializa la variable `newTask` con el objeto de la nueva tarea
    const newTask = { ...req.body };

    // Verifica si la nueva tarea tiene un ID válido
    if (!newTask.id) {
      res.status(400).json({ message: 'El ID de la tarea es obligatorio' });
      return;
    }

    // Agrega la nueva tarea a la lista de tareas
    tasks.push(newTask);

    // Responde con la nueva tarea
    res.json(newTask);
  });

  // Ruta para eliminar una tarea por ID (DELETE)
  router.delete('/eliminar/:id', (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.json({ message: 'Tarea eliminada con éxito' });
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  });

  // Ruta para actualizar una tarea por ID (PUT o PATCH)
  router.put('/actualizar/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body; // Se espera un objeto con los detalles actualizados de la tarea
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  });

  return router;
};
