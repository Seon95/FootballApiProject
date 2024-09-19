# Football API Backend

Este es el backend para el proyecto **FootballApiProject**. Proporciona una API para gestionar datos relacionados con competiciones de fútbol, equipos y jugadores. Está desarrollado con Node.js y Express, y utiliza Sequelize para la interacción con la base de datos.

## Estructura del Proyecto

El backend expone endpoints para importar datos de ligas de fútbol, y obtener competiciones, equipos y jugadores. Utiliza Sequelize para gestionar los modelos y las relaciones entre ellos.

## Dependencias

El proyecto utiliza las siguientes tecnologías y librerías:

- Express: Framework para construir el servidor HTTP.
- Sequelize: ORM para interactuar con bases de datos SQL.
- Axios: Cliente HTTP para hacer solicitudes a la API externa de fútbol.
- dotenv: Para gestionar variables de entorno.

## Instalación

Para la instalación y el uso del backend , revisa el README global

## Endpoints de la API

- Importar datos de una liga específica:

  ```http
  POST /import/:leagueCode
  ```

  Importa datos de equipos y jugadores para una liga específica usando el código de la liga.

- Obtener las ligas importadas:

  ```http
  GET /imported-leagues
  ```

  Obtiene la lista de todas las ligas importadas.

- Obtener todas las competiciones:

  ```http
  GET /competitions
  ```

  Obtiene una lista de todas las competiciones disponibles.

- Obtener equipos por código de competición:

  ```http
  GET /competitions/:competitionCode/teams
  ```

  Obtiene los equipos asociados a una competición específica usando el código de la competición.

- Obtener jugadores por ID de equipo:

  ```http
  GET /teams/:teamId/players
  ```

  Obtiene los jugadores asociados a un equipo específico usando el ID del equipo.

- Obtener detalles de un equipo por su ID:
  ```http
  GET /teams/:teamId
  ```
  Obtiene los detalles de un equipo específico usando el ID del equipo.

## Modelos y Relaciones

El proyecto usa Sequelize para definir los modelos y sus relaciones:

- Competition: Representa una competición de fútbol.
- Team: Representa un equipo de fútbol.
- Player: Representa un jugador de fútbol.

Las relaciones entre los modelos son:

- Una competición puede tener muchos equipos.
- Un equipo puede tener muchos jugadores.
- Un jugador pertenece a un único equipo.

## Configuración del Entorno

Asegúrate de tener configuradas las variables de entorno necesarias en el archivo `.env`. La clave API para la API de fútbol es esencial para que las solicitudes a la API externa funcionen correctamente.
Obtén aqui la clave API :https://www.football-data.org/client/register
