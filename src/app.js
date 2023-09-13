const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Lista de tareas
const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog',
  },
  {
    id: '123457',
    isCompleted: false,
    description: 'Buy items and toys',
  },
  // Puedes agregar más tareas aquí
];

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
