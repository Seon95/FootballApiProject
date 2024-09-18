import sequelize from './src/config/database';
import Competition from './src/models/Competition';
import Team from './src/models/Team';
import Player from './src/models/Player';

// testeando los models

async function testModels() {
  try {
    await sequelize.sync({ force: true });

    const competition = await Competition.create({
      name: 'Premier League',
      code: 'PL',
    });

    const team = await Team.create({
      name: 'Manchester United',
      tla: 'MUN',
      shortName: 'Man United',
      crest: 'https://crests.football-data.org/66.png',
    });

    await team.addCompetition(competition);

    const player = await Player.create({
      name: 'Bruno Fernandes',
      position: 'Midfielder',
      dateOfBirth: '1994-09-08',
      nationality: 'Portugal',
    });

    await team.addPlayer(player);

    console.log('Models tested successfully');
  } catch (error) {
    console.error('Error testing models:', error);
  } finally {
    await sequelize.close();
  }
}

testModels();