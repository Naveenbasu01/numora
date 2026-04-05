import { Component, effect, HostListener, inject, OnInit } from '@angular/core';
import { PrimaryCard } from '../../shared/components/primary-card/primary-card';
import { PieChart } from '../../shared/components/pie-chart/pie-chart';
import { GraphChart } from '../../shared/components/graph-chart/graph-chart';
import { TransactionCard } from '../../shared/components/transaction-card/transaction-card';
import { CommonModule } from '@angular/common';
import { Transaction, TransactionService } from '../../shared/service/trasaction-service';
import { TransactionModal } from '../../shared/components/transaction-modal/transaction-modal';

@Component({
  selector: 'app-dashboard',
  imports: [PrimaryCard, PieChart, GraphChart, TransactionCard, CommonModule, TransactionModal],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  isXXL = window.innerWidth >= 1400;
  @HostListener('window:resize')
  transactions: any[] = [];

  showModal = false;
  editingTransaction?: Transaction;
  private transactionService = inject(TransactionService);
  constructor() {
    effect(() => {
      this.transactions = [...this.transactionService.ledger()].reverse();
    });
  }
  ngOnInit(): void {}
  onResize() {
    this.isXXL = window.innerWidth >= 1400;
  }

  open(tx?: Transaction) {
    this.editingTransaction = tx;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.showModal = false;
    this.editingTransaction = undefined;
    document.body.style.overflow = '';
  }

  handleSave(data: Omit<Transaction, 'id'>) {
    if (this.editingTransaction) {
      this.transactionService.updateTransaction(this.editingTransaction.id, data);
    } else {
      this.transactionService.addTransaction(data);
    }
    this.close();
  }

  receiveTransactionTrigger(event: any) {
    this.open();
  }
}
