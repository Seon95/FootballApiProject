import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../config/database';
import Team from './Team';

class Player extends Model {
  public id!: number;
  public name!: string;
  public position!: string;
  public dateOfBirth!: Date;
  public nationality!: string;
  public teamId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    team: Association<Player, Team>;
  };
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamId: {
      type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'Players',
  }
);

Player.belongsTo(Team, { foreignKey: 'teamId' });
Team.hasMany(Player, { foreignKey: 'teamId' });

export default Player;
