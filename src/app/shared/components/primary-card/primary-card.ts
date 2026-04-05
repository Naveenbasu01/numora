import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() triggerTransaction = new EventEmitter<any>();
  getDashboardData() {
    const income = this.transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const savings = this.transactions
      .filter((t) => t.type === 'expense' && t.category === 'Savings')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = this.transactions
      .filter((t) => t.type === 'expense' && t.category !== 'Savings')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expense - savings;

    return {
      balance: balance,
      expense: 'expense',
      savings: 'savings',
    };
  }

  addTransaction() {
    this.triggerTransaction.emit();
  }
}
