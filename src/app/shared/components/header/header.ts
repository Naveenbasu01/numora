import { Component, inject } from '@angular/core';
import { CoreService } from '../../service/core-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private coreService = inject(CoreService);
  isUser = true;

  toggle() {
    this.isUser = !this.isUser;
    this.coreService.toggle();
  }
}
