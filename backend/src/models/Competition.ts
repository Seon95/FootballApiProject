import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../config/database';
import Team from './Team';

class Competition extends Model {
  public id!: number;
  public name!: string;
  public code!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public addTeam!: (team: Team) => Promise<void>;
  public addTeams!: (teams: Team[]) => Promise<void>;
  public getTeams!: () => Promise<Team[]>;
  public countTeams!: () => Promise<number>;
  public hasTeam!: (team: Team) => Promise<boolean>;
  public hasTeams!: (teams: Team[]) => Promise<boolean>;
  public removeTeam!: (team: Team) => Promise<void>;
  public removeTeams!: (teams: Team[]) => Promise<void>;
  public setTeams!: (teams: Team[]) => Promise<void>;

  public static associations: {
    teams: Association<Competition, Team>;
  };
}

Competition.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Competition',
  }
);

export default Competition;
