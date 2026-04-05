import { Component, inject, Input, OnInit } from '@angular/core';
import { aprilLegder } from '../../constants/ledger';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../service/trasaction-service';

@Component({
  selector: 'app-transaction-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-card.html',
  styleUrl: './transaction-card.scss',
})
export class TransactionCard implements OnInit {
  @Input() transactions: any[] = [];

  searchText = '';
  startDate: string | null = null;
  endDate: string | null = null;

  ngOnInit(): void {
    const now = new Date();

    // First day of current month
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);

    // Last day of current month
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // Convert to 'YYYY-MM-DD' format
    this.startDate = firstDay.toISOString().split('T')[0];
    this.endDate = lastDay.toISOString().split('T')[0];
  }

  get filteredTransactions() {
    return this.transactions.filter((t) => {
      const textMatch =
        !this.searchText ||
        t.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
        t.notes.toLowerCase().includes(this.searchText.toLowerCase()) ||
        t.type.toLowerCase().includes(this.searchText.toLowerCase());

      const transactionDate = new Date(t.date).getTime();

      const startMatch = !this.startDate || transactionDate >= new Date(this.startDate).getTime();

      const endMatch = !this.endDate || transactionDate <= new Date(this.endDate).getTime();

      return textMatch && startMatch && endMatch;
    });
  }
}
