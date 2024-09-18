import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import importRoutes from './routes/importRoutes';
import sequelize from './config/database';
import './models';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de la aplicación Express
const app = express();

// Obtener el puerto desde las variables de entorno o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(cors()); // Habilitar CORS para permitir solicitudes desde diferentes orígenes
app.use(express.json()); // Middleware para analizar cuerpos de solicitudes en formato JSON

// Configurar las rutas
app.use('/api', importRoutes); // Enrutar todas las solicitudes que comienzan con /api a importRoutes

// Sincronizar los modelos de la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Mensaje de confirmación cuando el servidor está en funcionamiento
  });
});
