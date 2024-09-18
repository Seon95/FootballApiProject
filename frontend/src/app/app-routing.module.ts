import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeagueImportComponent } from './league-import/league-import.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'import', component: LeagueImportComponent },
  { path: 'teams/:leagueCode', component: TeamListComponent },
  { path: 'team/:teamId', component: TeamDetailComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
