import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  readonly transitionState = signal(false);
  readonly amoebaState = signal(false);
  start() {
    this.transitionState.set(true);
  }
  stop() {
    this.transitionState.set(false);
  }

  startAmoeba() {
    this.amoebaState.set(true);
  }
  stopAmoeba() {
    this.amoebaState.set(false);
  }

  readonly loading = signal(false);
  startDef() {
    this.loading.set(true);
  }
  stopDef() {
    this.loading.set(false);
  }
  startDefLoader() {
    this.startDef();
    setTimeout(() => {
      this.stopDef();
    }, 500);
  }
}
