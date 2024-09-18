import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'http://localhost:3000/api'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Importar datos de la liga por código de liga
  importLeagueData(leagueCode: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/import/${leagueCode}`, {});
  }

  // Obtener equipos por código de competencia
  getTeamsByCompetition(competitionCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionCode}/teams`);
  }

  // Obtener detalles de un equipo por su ID
  getTeamDetails(teamId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teams/${teamId}`);
  }

  // Obtener jugadores por ID de equipo
  getPlayersByTeam(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams/${teamId}/players`);
  }

  // Obtener ligas importadas
  getImportedLeagues(): Observable<{ name: string, code: string }[]> {
    return this.http.get<{ name: string, code: string }[]>(`${this.apiUrl}/imported-leagues`);
  }

  
  
}

