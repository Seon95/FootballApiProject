import { Request, Response } from 'express';
import Competition from '../models/Competition';
import Team from '../models/Team';
import Player from '../models/Player';

// Obtener todas las competencias
export const getCompetitions = async (req: Request, res: Response) => {
  try {
    // Obtiene todas las competencias desde la base de datos
    const competitions = await Competition.findAll();
    // Envía la lista de competencias en la respuesta
    res.status(200).json(competitions);
  } catch (error) {
    console.error('Error fetching competitions:', error);
    // Maneja el error y envía un mensaje de error
    res.status(500).json({ message: 'Error fetching competitions' });
  }
};

// Obtener equipos por código de competencia
export const getTeamsByCompetition = async (req: Request, res: Response) => {
  const { competitionCode } = req.params;

  try {
    // Busca la competencia por su código e incluye los equipos asociados
    const competition = await Competition.findOne({
      where: { code: competitionCode },
      include: [Team],
    });

    if (!competition) {
      // Responde con un error si no se encuentra la competencia
      return res.status(404).json({ message: 'Competition not found' });
    }

    // Obtiene los equipos asociados a la competencia
    const teams = await competition.getTeams();
    // Envía la lista de equipos en la respuesta
    res.status(200).json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    // Maneja el error y envía un mensaje de error
    res.status(500).json({ message: 'Error fetching teams for the competition' });
  }
};

// Obtener jugadores por ID de equipo
export const getPlayersByTeam = async (req: Request, res: Response) => {
  const { teamId } = req.params;

  try {
    // Busca el equipo por su ID e incluye los jugadores asociados
    const team = await Team.findByPk(teamId, { include: [Player] });

    if (!team) {
      // Responde con un error si no se encuentra el equipo
      return res.status(404).json({ message: 'Team not found' });
    }

    // Obtiene los jugadores asociados al equipo
    const players = await team.getPlayers();
    // Envía la lista de jugadores en la respuesta
    res.status(200).json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    // Maneja el error y envía un mensaje de error
    res.status(500).json({ message: 'Error fetching players for the team' });
  }
};

// Obtener detalles de un equipo por su ID
export const getTeamById = async (req: Request, res: Response) => {
  const { teamId } = req.params;

  try {
    // Busca el equipo por su ID
    const team = await Team.findByPk(teamId);

    if (!team) {
      // Responde con un error si no se encuentra el equipo
      return res.status(404).json({ message: 'Team not found' });
    }

    // Envía los detalles del equipo en la respuesta
    res.status(200).json(team);
  } catch (error) {
    console.error('Error fetching team details:', error);
    // Maneja el error y envía un mensaje de error
    res.status(500).json({ message: 'Error fetching team details' });
  }
};
