import { Router } from 'express';
import { importLeagueData, getImportedLeagues } from '../controllers/importController';
import { getCompetitions, getTeamsByCompetition, getPlayersByTeam, getTeamById } from '../controllers/getContoller';

const router = Router();

// Rutas para importar datos

// Ruta para importar datos de una liga específica
// El código de la liga se pasa como parámetro en la URL
router.post('/import/:leagueCode', importLeagueData);

// Ruta para obtener la lista de ligas importadas
router.get('/imported-leagues', getImportedLeagues);

// Rutas para obtener datos

// Ruta para obtener todas las competiciones
router.get('/competitions', getCompetitions);

// Ruta para obtener los equipos de una competición específica
// El código de la competición se pasa como parámetro en la URL
router.get('/competitions/:competitionCode/teams', getTeamsByCompetition);

// Ruta para obtener los jugadores de un equipo específico
// El ID del equipo se pasa como parámetro en la URL
router.get('/teams/:teamId/players', getPlayersByTeam);

// Ruta para obtener los detalles de un equipo específico
// El ID del equipo se pasa como parámetro en la URL
router.get('/teams/:teamId', getTeamById);

export default router;
