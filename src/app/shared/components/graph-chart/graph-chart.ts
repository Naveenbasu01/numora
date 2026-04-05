import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AgCartesianChartOptions,
  AgChartOptions,
  AreaSeriesModule,
  LineSeriesModule,
} from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';
import {
  CategoryAxisModule,
  NumberAxisModule,
  CartesianChartModule,
  ModuleRegistry,
} from 'ag-charts-community';
ModuleRegistry.registerModules([
  CartesianChartModule,
  CategoryAxisModule,
  NumberAxisModule,
  LineSeriesModule,
  AreaSeriesModule,
]);
@Component({
  selector: 'app-graph-chart',
  imports: [AgCharts],
  templateUrl: './graph-chart.html',
  styleUrl: './graph-chart.scss',
})
export class GraphChart implements OnChanges {
  @Input() transactions: any[] = [];
  period: 'daily' | 'weekly' = 'daily';
  dataMap: Record<'daily' | 'weekly', any[]> = {
    daily: this.getDailyChartData(),
    weekly: this.getWeeklyChartData(),
  };

  options: AgChartOptions = this.buildOptions(this.dataMap[this.period]);
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions'] && this.transactions?.length) {
      this.transactions = [...this.transactions].reverse();
      const data = this.period === 'daily' ? this.getDailyChartData() : this.getWeeklyChartData();

      this.options = this.buildOptions(data);
    }
  }
  changePeriod(value: any) {
    this.period = value.target.value;
    const data = this.period === 'daily' ? this.getDailyChartData() : this.getWeeklyChartData();
    this.options = this.buildOptions(data);
  }

  private buildOptions(data: any[]): AgCartesianChartOptions {
    return {
      background: {
        fill: 'transparent',
      },
      data,

      title: {
        text: 'April',
        fontSize: 18,
        fontWeight: 'bold',
      },

      padding: {
        top: 10,
        right: 20,
        bottom: 20,
        left: 20,
      },

      axes: {
        x: {
          type: 'category',
          position: 'bottom',
        },
        y: {
          type: 'number',
          position: 'left',
          nice: true,
        },
      },

      series: [
        {
          type: 'area',
          xKey: 'date',
          yKey: 'value',
          fill: 'rgba(99,102,241,0.25)',
          stroke: '#6366F1',
          strokeWidth: 2,
          marker: { enabled: false },
        },
        {
          type: 'line',
          xKey: 'date',
          yKey: 'value',
          stroke: '#111827',
          strokeWidth: 2,
          marker: {
            size: 6,
            fill: '#ffffff',
            stroke: '#6366F1',
            strokeWidth: 2,
          },
        },
      ],

      legend: { enabled: false },
      tooltip: { enabled: true },
    };
  }

  getDailyChartData() {
    const map: Record<string, number> = {};

    this.transactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        const day = new Date(t.date).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
        });

        if (!map[day]) {
          map[day] = 0;
        }

        map[day] += t.amount;
      });

    return Object.entries(map).map(([date, value]) => ({
      date,
      value,
    }));
  }

  getWeeklyChartData() {
    const totalExpense = this.transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return [{ date: 'Week 1', value: totalExpense }];
  }
}
