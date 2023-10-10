const express = require('express');
const app = express();
const port = 3000;

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

// Requerir los enrutadores de vista y edición y pasar la lista de tareas como parámetro
const listViewRouter = require('./list-view-router')(tasks);
const editViewRouter = require('./list-edit-router')(tasks);

// Middleware para procesar el cuerpo JSON de las solicitudes
app.use(express.json());

// Agregar los enrutadores al servidor
app.use('/listas', listViewRouter);
app.use('/editar', editViewRouter);

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
