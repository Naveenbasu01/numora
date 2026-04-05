import { computed, Injectable, signal } from '@angular/core';
export type Role = 'user' | 'admin';

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

  ////////////////// type of modal /////////////////

  readonly isModalType = signal('expense');

  updateModalType(type: any) {
    this.isModalType.set(type);
  }

  /////////////////// user role /////////////////////

  private _isUser = signal(true);

  readonly isUser = this._isUser.asReadonly();

  readonly role = computed<Role>(() => (this._isUser() ? 'user' : 'admin'));

  toggle() {
    this._isUser.update((v) => !v);
  }

  setUser() {
    this._isUser.set(true);
  }

  setAdmin() {
    this._isUser.set(false);
  }
}
