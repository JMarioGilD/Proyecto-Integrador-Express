const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config(); // Cargar variables de entorno

// Importar tus rutas y otros módulos
const route = require('./router');
const listEditRouter = require('./list-edit-router');
const listViewRouter = require('./list-view-router');

// Middleware para procesar el cuerpo JSON de las solicitudes
app.use(express.json());

// Usar las rutas definidas en los módulos
app.use('/api', route);
app.use('/listas', listViewRouter);
app.use('/editar', listEditRouter);

// Otras rutas que puedas tener en app.js sin cambios
app.get('/', (req, res) => {
  res.status(200).send('Bienvenido Al Sistema De Gestión De Tareas');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
