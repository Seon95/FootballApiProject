import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-team-detail',
  standalone: true, // Asegúrate de que el componente es standalone
  imports: [CommonModule,RouterLink], // Agregar CommonModule
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team: any = null;
  players: any[] = [];
  teamId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('teamId');  // Cambia 'id' a 'teamId'
      if (id) {
        this.teamId = +id; // Convierte a número
        this.loadTeamDetails();
      } else {
        console.error('No team ID provided');
      }
    });
  }

  loadTeamDetails(): void {
    this.footballService.getTeamDetails(this.teamId).subscribe({
      next: (data) => {
        this.team = data;
        this.loadPlayers();
      },
      error: (err) => console.error('Error fetching team details:', err)
    });
  }

  loadPlayers(): void {
    this.footballService.getPlayersByTeam(this.teamId).subscribe({
      next: (data) => this.players = data,
      error: (err) => console.error('Error fetching players:', err)
    });
  }

  getPlayersByPosition(position: string): any[] {
    return this.players.filter(player => 
      player.position === position && player.teamId === this.team.id
    );
  }
  
}