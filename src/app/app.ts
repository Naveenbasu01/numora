import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { aprilLegder } from './shared/constants/ledger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('numora');
  transactions = aprilLegder;

  ngOnInit(): void {
    if (!localStorage.getItem('transactions')) {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  }
}
