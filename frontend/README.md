# Frontend de la API de Fútbol

Este es el frontend para el proyecto **FootballApiProject**. Está desarrollado con Angular y proporciona una interfaz para interactuar con la API de fútbol, mostrando información sobre ligas, equipos y jugadores.

## Estructura del Proyecto

El frontend está compuesto por varios componentes y servicios que permiten importar datos, visualizar equipos y obtener detalles de equipos. A continuación se describe la estructura principal:

### Componentes

- **HomeComponent**: Página principal que proporciona acceso a otras secciones de la aplicación.
- **LeagueImportComponent**: Permite importar datos de ligas de fútbol usando un formulario.
- **TeamListComponent**: Muestra una lista de equipos para una liga específica.
- **TeamDetailComponent**: Muestra los detalles de un equipo específico y su lista de jugadores.

### Servicios

- **LeagueService**: Proporciona métodos para obtener información sobre ligas.
- **FootballService**: Interactúa con la API del backend para obtener datos de ligas, equipos y jugadores.
- **CountdownService**: Maneja un temporizador para controlar la importación de datos y el estado del botón de importación.

## Configuración de Rutas

Las rutas están configuradas en `app-routing.module.ts` y permiten la navegación entre diferentes secciones de la aplicación:

- Inicio: `/`
- Importar Ligas: `/import`
- Lista de Equipos: `/teams/:leagueCode`
- Detalles del Equipo: `/team/:teamId`

## Instalación

Para la instalación y el uso del frontend , revisa el README global

## Uso

1. **Página de Inicio**: Navega a través de las diferentes secciones de la aplicación.
2. **Importar Datos de Liga**: Utiliza el formulario de importación para obtener datos de ligas específicas.
3. **Ver Equipos**: Explora los equipos de las ligas importadas.
4. **Detalles del Equipo**: Accede a información detallada sobre equipos específicos y sus jugadores.

La aplicación estará disponible en http://localhost:4200 después de seguir los pasos de instalación y ejecución descritos en el README principal.
