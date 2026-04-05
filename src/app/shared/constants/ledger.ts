export const aprilLegder = [
  {
    id: 1,
    type: 'income',
    amount: 50000,
    category: 'Salary',
    notes: 'Monthly salary credited',
    date: '2026-04-01',
  },
  {
    id: 2,
    type: 'expense',
    amount: 299,
    category: 'Self',
    notes: 'Mobile recharge',
    date: '2026-04-01',
  },
  {
    id: 3,
    type: 'expense',
    amount: 1200,
    category: 'Food',
    notes: 'Lunch & snacks',
    date: '2026-04-01',
  },

  {
    id: 4,
    type: 'expense',
    amount: 2500,
    category: 'Transport',
    notes: 'Fuel & cab',
    date: '2026-04-02',
  },
  {
    id: 5,
    type: 'expense',
    amount: 1800,
    category: 'Entertainment',
    notes: 'Movie night',
    date: '2026-04-02',
  },

  {
    id: 6,
    type: 'income',
    amount: 8000,
    category: 'Freelance',
    notes: 'Side project payment',
    date: '2026-04-03',
  },
  {
    id: 7,
    type: 'expense',
    amount: 4200,
    category: 'Shopping',
    notes: 'Clothes',
    date: '2026-04-03',
  },

  {
    id: 8,
    type: 'expense',
    amount: 3500,
    category: 'Bills',
    notes: 'Electricity & internet',
    date: '2026-04-04',
  },

  {
    id: 9,
    type: 'expense',
    amount: 6000,
    category: 'Savings',
    notes: 'Transferred to savings account',
    date: '2026-04-05',
  },
];
export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  notes: string;
  date: string;
}
