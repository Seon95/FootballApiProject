import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { takeWhile, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private countdownSubject = new BehaviorSubject<number>(0);
  private endTime: number = 0;

  constructor() {
    const savedEndTime = localStorage.getItem('countdownEndTime');
    if (savedEndTime) {
      this.endTime = parseInt(savedEndTime, 10);
    }
  }

  startCountdown(duration: number): Observable<number> {
    if (this.getRemainingTime() <= 0) {
      // Solo establecer un nuevo endTime si el temporizador ya ha terminado.
      this.endTime = Date.now() + duration * 1000;
      localStorage.setItem('countdownEndTime', this.endTime.toString());
      localStorage.setItem('isImportButtonDisabled', 'true');
    }

    return this.getCountdownObservable();
  }

  getCountdownObservable(): Observable<number> {
    return timer(0, 1000).pipe(
      map(() => Math.max(0, Math.ceil((this.endTime - Date.now()) / 1000))),
      takeWhile(count => count > 0),
      tap(count => this.countdownSubject.next(count))
    );
  }

  getRemainingTime(): number {
    const remaining = Math.max(0, Math.ceil((this.endTime - Date.now()) / 1000));
    return remaining;
  }

  clearCountdown(): void {
    localStorage.removeItem('countdownEndTime');
    localStorage.removeItem('isImportButtonDisabled');
    this.endTime = 0;
  }

  isButtonDisabled(): boolean {
    return localStorage.getItem('isImportButtonDisabled') === 'true';
  }
}
