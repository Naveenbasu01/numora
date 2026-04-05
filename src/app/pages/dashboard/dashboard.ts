import { Component, HostListener, inject, OnInit } from '@angular/core';
import { PrimaryCard } from '../../shared/components/primary-card/primary-card';
import { PieChart } from '../../shared/components/pie-chart/pie-chart';
import { GraphChart } from '../../shared/components/graph-chart/graph-chart';
import { TransactionCard } from '../../shared/components/transaction-card/transaction-card';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../shared/service/trasaction-service';

@Component({
  selector: 'app-dashboard',
  imports: [PrimaryCard, PieChart, GraphChart, TransactionCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  isXXL = window.innerWidth >= 1400;
  @HostListener('window:resize')
  transactions: any[] = [];
  private transactionService = inject(TransactionService);
  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
  }
  onResize() {
    this.isXXL = window.innerWidth >= 1400;
  }
}
