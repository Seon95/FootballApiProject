import axios from 'axios';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener la clave API y la URL base de las variables de entorno
const API_KEY = process.env.FOOTBALL_API_KEY;
const BASE_URL = 'https://api.football-data.org/v4';

// Crear una instancia de axios con la configuración base
const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'X-Auth-Token': API_KEY } // Configurar el token de autenticación en los headers
});

// Función para obtener los datos de una competición específica
export async function getCompetition(code: string) {
  try {
    // Realizar una solicitud GET a la API para obtener la competición
    const response = await api.get(`/competitions/${code}`);
    return response.data; // Retornar los datos de la competición
  } catch (error) {
    console.error('Error fetching competition:', error); // Registrar cualquier error en la consola
    throw error; // Lanzar el error para que pueda ser manejado por el llamador
  }
}

// Función para obtener los equipos de una competición específica
export async function getTeams(competitionCode: string) {
  try {
    // Realizar una solicitud GET a la API para obtener los equipos de la competición
    const response = await api.get(`/competitions/${competitionCode}/teams`);
    return response.data.teams; // Retornar los datos de los equipos
  } catch (error) {
    console.error('Error fetching teams:', error); // Registrar cualquier error en la consola
    throw error; // Lanzar el error para que pueda ser manejado por el llamador
  }
}

// Función para obtener los jugadores de un equipo específico
export async function getPlayers(teamId: number) {
  try {
    // Realizar una solicitud GET a la API para obtener los jugadores del equipo
    const response = await api.get(`/teams/${teamId}`);
    return response.data.squad; // Retornar los datos de los jugadores
  } catch (error) {
    console.error('Error fetching players:', error); // Registrar cualquier error en la consola
    throw error; // Lanzar el error para que pueda ser manejado por el llamador
  }
}
