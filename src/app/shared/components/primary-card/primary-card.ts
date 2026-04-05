import { Component, Input } from '@angular/core';
import { SubTransaction } from '../sub-transaction/sub-transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-card',
  imports: [SubTransaction, CommonModule],
  templateUrl: './primary-card.html',
  styleUrl: './primary-card.scss',
})
export class PrimaryCard {
  @Input() transactions: any[] = [];
  sampleTransaction = [
    {
      type: 'exp',
      name: 'Food & Snack',
      amount: '1250',
    },
    {
      type: 'inc',
      name: 'Trade',
      amount: '11250',
    },
  ];
}
