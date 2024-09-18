import Competition from './Competition';
import Team from './Team';
import Player from './Player';

// Establecer relaciones entre modelos

// Una competición puede tener muchos equipos y un equipo puede estar en muchas competiciones
Competition.belongsToMany(Team, { through: 'TeamCompetitions' });
Team.belongsToMany(Competition, { through: 'TeamCompetitions' });

// Un equipo puede tener muchos jugadores
// Un jugador pertenece a un único equipo
Team.hasMany(Player, { foreignKey: 'teamId', as: 'players' });
Player.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });

// Exportar los modelos para que estén disponibles en otras partes de la aplicación
export { Competition, Team, Player };
