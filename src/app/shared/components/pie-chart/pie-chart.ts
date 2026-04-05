import { Component, Input, OnChanges } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';

import { AgChartOptions, LegendModule, ModuleRegistry, PieSeriesModule } from 'ag-charts-community';
import { aprilLegder } from '../../constants/ledger';
ModuleRegistry.registerModules([LegendModule, PieSeriesModule]);

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './pie-chart.html',
  styleUrl: './pie-chart.scss',
})
export class PieChart implements OnChanges {
  @Input() transactions: any[] = [];
  public options: any;
  constructor() {
    this.options = {
      data: [],
      background: { visible: false },
      series: [
        {
          type: 'pie',
          angleKey: 'amount',
          legendItemKey: 'asset',
          fills: ['#1e3a8a', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'],
          strokes: ['#ffffff'],
          strokeWidth: 1,
        },
      ],
    };
  }

  ngOnChanges(): void {
    if (!this.transactions?.length) return;

    this.options = {
      ...this.options,
      data: this.getPieChartData(),
    };
  }

  getPieChartData() {
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

    return [
      { asset: 'Balance', amount: balance },
      { asset: 'Expense', amount: expense },
      { asset: 'Savings', amount: savings },
    ];
  }
}
