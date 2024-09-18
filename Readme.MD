# FootballApiProject

FootballApiProject es una aplicación web que proporciona información sobre fútbol a través de una API. Permite la importación de datos de ligas, equipos y jugadores, así como la visualización de detalles sobre equipos y jugadores. La aplicación es **responsive**, asegurando que funcione bien en dispositivos de diferentes tamaños.

## Características

- **Importación de datos**: Permite la importación de datos de ligas, equipos y jugadores desde una API, con una restricción de un import por minuto debido a las limitaciones de la API.
- **Visualización de datos**: Navega a través de equipos en diferentes ligas y visualiza detalles y estadísticas de los jugadores.
- **Interfaz de usuario**: Ofrece una interfaz intuitiva para facilitar la navegación y visualización de datos.

## Tecnologías Utilizadas

- **Backend**: Node.js and Express
- **Frontend**: Angular
- **Base de Datos**: MySQL

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Seon95/FootballApiProject.git
   cd FootballApiProject
   ```

2. **Instala las dependencias del backend**

   Navega a la carpeta del backend:

   ```bash
   cd backend
   ```

   y ejecuta:

   ```bash
   npm install
   ```

   Inicia el servidor del backend con el siguiente comando, lo que también creará la base de datos:

   ```bash
   npm start
   ```

3. **Instala las dependencias del frontend**

   Abre una nueva terminal y dirígete a la carpeta del frontend:

   ```bash
   cd frontend
   ```

   y ejecuta:

   ```bash
   npm install
   ```

4. **Configura las variables de entorno**

   En la raíz del proyecto, cambia el nombre del archivo `.env.example` a `.env` y añade tus variables de entorno necesarias, como la clave API (la mía está incluida como ejemplo).

5. **Ejecuta la aplicación**

   - **Para el frontend**:

     ```bash
     npm start
     ```

6. **Accede a la aplicación**

   Abre tu navegador y visita `http://localhost:4200` para ver la aplicación en funcionamiento.
