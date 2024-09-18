import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FootballService } from '../services/football.service';
import { CountdownService } from '../services/countdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  importedLeagues: { name: string, code: string }[] = [];
  isImportButtonDisabled: boolean = false;
  countdown: number = 60;
  private countdownSubscription: Subscription | null = null;

  constructor(
    private footballService: FootballService,
    private countdownService: CountdownService
  ) {}

  ngOnInit(): void {
    this.loadImportedLeagues();
    this.checkCountdownStatus();
  }

  ngOnDestroy(): void {
    this.countdownSubscription?.unsubscribe();
  }

  loadImportedLeagues(): void {
    this.footballService.getImportedLeagues().subscribe({
      next: (data) => this.importedLeagues = data,
      error: (err) => console.error('Error fetching imported leagues:', err)
    });
  }

  onImportClick(): void {
    if (!this.isImportButtonDisabled) {
      this.startCountdown();
    }
  }

  private startCountdown(): void {
    this.toggleButton(true);
    this.countdownSubscription = this.countdownService.startCountdown(60).subscribe({
      next: (count) => this.countdown = count,
      complete: () => this.resetCountdown()
    });
  }

  private checkCountdownStatus(): void {
    const remainingTime = this.countdownService.getRemainingTime();
    
    if (remainingTime > 0 && this.countdownService.isButtonDisabled()) {
      this.toggleButton(true);
      this.countdown = remainingTime;
      this.countdownSubscription = this.countdownService.getCountdownObservable().subscribe({
        next: (count) => this.countdown = count,
        complete: () => this.resetCountdown()
      });
    }
  }

  private resetCountdown(): void {
    this.toggleButton(false);
    this.countdown = 60;
    this.countdownService.clearCountdown();
  }

  private toggleButton(disabled: boolean): void {
    this.isImportButtonDisabled = disabled;
  }
}
