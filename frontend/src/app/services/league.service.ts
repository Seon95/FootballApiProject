import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private leagues = new Map<string, string>([
    ['WC', 'FIFA World Cup'],
    ['CL', 'UEFA Champions League'],
    ['BL1', 'Bundesliga'],
    ['DED', 'Eredivisie'],
    ['BSA', 'Campeonato Brasileiro Série A'],
    ['PD', 'Primera Division'],
    ['FL1', 'Ligue 1'],
    ['ELC', 'Championship'],
    ['PPL', 'Primeira Liga'],
    ['EC', 'European Championship'],
    ['SA', 'Serie A'],
    ['PL', 'Premier League'],
    ['CLI', 'Copa Libertadores']
  ]);

  constructor() {}

  getLeagueName(code: string): string {
    return this.leagues.get(code) || 'Unknown League';
  }

  getAllLeagues(): Map<string, string> {
    return this.leagues;
  }
}
