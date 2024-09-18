import { getCompetition, getTeams } from './src/services/footballDataService';

//testeando football dataservice

async function testFootballDataService() {
  try {
    const competition = await getCompetition('PL');
    console.log('Competition:', competition);

    const teams = await getTeams('PL');
    console.log('Teams:', teams);
  } catch (error) {
    console.error('Error testing football data service:', error);
  }
}

testFootballDataService();