import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FootballService } from '../services/football.service';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];
  filteredTeams: any[] = [];
  leagueCode: string = '';
  searchTerm: string = '';
  leagueName: string = '';

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService,
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
    this.leagueCode = this.route.snapshot.paramMap.get('leagueCode') || '';
    this.leagueName = this.leagueService.getLeagueName(this.leagueCode);

    if (this.leagueCode) {
      this.loadTeams();
    } else {
      console.error('No league code provided');
    }
  }

  loadTeams() {
    this.footballService.getTeamsByCompetition(this.leagueCode).subscribe({
      next: (data) => {
        this.teams = data;
        this.filteredTeams = this.teams;
      },
      error: (error) => {
        console.error('Error loading teams', error);
      }
    });
  }

  onSearchTermChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.filteredTeams = this.teams.filter(team =>
      team.name.toLowerCase().includes(this.searchTerm)
    );
  }
}
