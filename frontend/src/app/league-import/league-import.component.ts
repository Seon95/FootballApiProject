import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FootballService } from '../services/football.service';
import { LeagueService } from '../services/league.service'; // Importa el LeagueService

@Component({
  selector: 'app-league-import',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './league-import.component.html',
  styleUrls: ['./league-import.component.css']
})
export class LeagueImportComponent implements OnInit {
  leagueCode: string = '';
  isLoading: boolean = false;
  leagues: { code: string, name: string }[] = [];

  constructor(
    private footballService: FootballService,
    private router: Router,
    private leagueService: LeagueService // Inyección del servicio de ligas
  ) {}

  ngOnInit(): void {
    // Carga las ligas desde el LeagueService al inicializar el componente
    this.loadLeagues();
  }

  loadLeagues(): void {
    // Obtiene todas las ligas del servicio
    this.leagues = Array.from(this.leagueService.getAllLeagues(), ([code, name]) => ({ code, name }));
  }

  importLeague(): void {
    this.isLoading = true;
    this.footballService.importLeagueData(this.leagueCode).subscribe({
      next: (response) => {
        console.log('League imported successfully!', response);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error importing league:', error);
        this.isLoading = false;
        this.router.navigate(['/']);
      }
    });
  }
}
