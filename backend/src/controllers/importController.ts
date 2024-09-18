import { Request, Response } from 'express';
import { getCompetition, getTeams, getPlayers } from '../services/footballDataService';
import { Competition, Team } from '../models';
import Player from '../models/Player';

// Función para importar datos de la liga
export const importLeagueData = async (req: Request, res: Response) => {
  const { leagueCode } = req.params;

  try {
    // Obtener datos de la competición desde el servicio
    const competitionData = await getCompetition(leagueCode);

    // Crear o encontrar la competición en la base de datos
    const [competition] = await Competition.findOrCreate({
      where: { code: competitionData.code },
      defaults: {
        name: competitionData.name,
        code: competitionData.code,
      },
    });

    // Obtener datos de los equipos de la competición
    const teamsData = await getTeams(leagueCode);
    
    // Iterar sobre los datos de los equipos
    for (const teamData of teamsData) {
      // Crear o encontrar el equipo en la base de datos
      const [team] = await Team.findOrCreate({
        where: { tla: teamData.tla },
        defaults: {
          name: teamData.name,
          tla: teamData.tla,
          shortName: teamData.shortName,
          crest: teamData.crest,
        },
      });

      // Asociar el equipo a la competición
      await competition.addTeam(team);

      // Obtener datos de los jugadores del equipo
      const playersData = await getPlayers(teamData.id);
      
      // Iterar sobre los datos de los jugadores
      for (const playerData of playersData) {
        // Crear o encontrar el jugador en la base de datos
        await Player.findOrCreate({
          where: { name: playerData.name },
          defaults: {
            position: playerData.position,
            dateOfBirth: playerData.dateOfBirth,
            nationality: playerData.nationality,
            teamId: team.id // Asignar el ID del equipo al jugador
          }
        });
      }
    }

    // Responder con éxito
    res.status(200).json({ message: 'League data imported successfully' });
  } catch (error) {
    // Manejo de errores
    console.error('Error importing league data:', error);
    res.status(500).json({ message: 'Error importing league data' });
  }
};

// Función para obtener las ligas importadas
export const getImportedLeagues = async (req: Request, res: Response) => {
  try {
    // Obtener todas las competiciones desde la base de datos, incluyendo los equipos si es necesario
    const competitions = await Competition.findAll({
      include: [Team] // Incluye los equipos asociados con la competición
    });
    
    // Opcional: Formatear la respuesta para incluir solo nombres y códigos
    const response = competitions.map(comp => ({
      name: comp.name,
      code: comp.code
    }));
    
    // Responder con los datos de las ligas
    res.status(200).json(response);
  } catch (error) {
    // Manejo de errores
    console.error('Error fetching imported leagues:', error);
    res.status(500).json({ message: 'Error fetching imported leagues' });
  }
};
