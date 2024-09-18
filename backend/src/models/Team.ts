import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../config/database';
import Competition from './Competition';
import Player from './Player';

class Team extends Model {
  public id!: number;
  public name!: string;
  public tla!: string;
  public shortName!: string;
  public crest!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public addCompetition!: (competition: Competition, options?: any) => Promise<void>;
  public addCompetitions!: (competitions: Competition[], options?: any) => Promise<void>;
  public getCompetitions!: (options?: any) => Promise<Competition[]>;
  public countCompetitions!: (options?: any) => Promise<number>;
  public hasCompetition!: (competition: Competition, options?: any) => Promise<boolean>;
  public hasCompetitions!: (competitions: Competition[], options?: any) => Promise<boolean>;
  public removeCompetition!: (competition: Competition, options?: any) => Promise<void>;
  public removeCompetitions!: (competitions: Competition[], options?: any) => Promise<void>;
  public setCompetitions!: (competitions: Competition[], options?: any) => Promise<void>;

  public addPlayer!: (player: Player, options?: any) => Promise<void>;
  public addPlayers!: (players: Player[], options?: any) => Promise<void>;
  public getPlayers!: (options?: any) => Promise<Player[]>;
  public countPlayers!: (options?: any) => Promise<number>;
  public hasPlayer!: (player: Player, options?: any) => Promise<boolean>;
  public hasPlayers!: (players: Player[], options?: any) => Promise<boolean>;
  public removePlayer!: (player: Player, options?: any) => Promise<void>;
  public removePlayers!: (players: Player[], options?: any) => Promise<void>;
  public setPlayers!: (players: Player[], options?: any) => Promise<void>;

  public static associations: {
    competitions: Association<Team, Competition>;
    players: Association<Team, Player>;
  };
}

Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tla: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Team',
  }
);

export default Team;
