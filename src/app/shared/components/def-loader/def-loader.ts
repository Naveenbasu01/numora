import { Component, effect, inject } from '@angular/core';
import { gsap } from 'gsap';
import { CoreService } from '../../service/core-service';

@Component({
  selector: 'app-def-loader',
  imports: [],
  templateUrl: './def-loader.html',
  styleUrl: './def-loader.scss',
})
export class DefLoader {
  coreService = inject(CoreService);
  constructor() {
    effect(() => {
      const state = this.coreService.transitionState();
      console.log('Transition state changed to:', state);
      this.pageTransition();
    });
  }

  pageTransition() {
    let tl = gsap.timeline();
    if (this.coreService.transitionState()) {
      // tl.to('ul.transition li', {
      //   scaleX: 1,
      //   transformOrigin: 'right',
      //   duration: 1.5,
      //   ease: 'power4.inOut',
      //   stagger: 0.1,
      // });
    } else {
      tl.to('ul.transition li', {
        scaleX: 0,
        transformOrigin: 'right',
        duration: 1.5,
        ease: 'power4.inOut',
        stagger: 0.1,
      });
    }
  }
}
