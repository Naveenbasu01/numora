import { computed, inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root',
})
export class ScreenSize {
  private readonly small = '(max-width:767px)';
  private readonly medium = '(min-width:768px) and (max-width: 1000px)';
  private readonly large = '(min-width:1001px)';
  breakpointObserver = inject(BreakpointObserver);

  screenWidth = toSignal(this.breakpointObserver.observe([this.small, this.medium, this.large]));

  smallScreen = computed(() => this.screenWidth()?.breakpoints[this.small]);
  mediumScreen = computed(() => this.screenWidth()?.breakpoints[this.medium]);
  largeScreen = computed(() => this.screenWidth()?.breakpoints[this.large]);

  deviceIdentifier() {
    if (this.largeScreen()) {
      return 'large';
    } else if (this.mediumScreen()) {
      return 'medium';
    }
    return 'small';
  }
}
