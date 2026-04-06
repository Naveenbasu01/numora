import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { aprilLegder } from './shared/constants/ledger';
import { DefLoader } from './shared/components/def-loader/def-loader';
import { CoreService } from './shared/service/core-service';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, DefLoader, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('numora');
  private coreService = inject(CoreService);
  transactions = aprilLegder;
  isLoading = true;
  constructor() {
    // this.coreService.start();
  }
  ngOnInit(): void {
    if (!localStorage.getItem('transactions')) {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
    setTimeout(() => {
      this.coreService.stop();
    }, 1500);
  }
}
