import { Injectable, signal, effect } from '@angular/core';

export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  notes: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private storageKey = 'transactions';

  public ledger = signal<Transaction[]>(this.loadLedger());

  constructor() {
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.ledger()));
    });
  }

  private loadLedger(): Transaction[] {
    const data = localStorage.getItem(this.storageKey);
    console.log('transactions :', data);
    return data ? JSON.parse(data) : [];
  }

  getTransactions(): Transaction[] {
    return this.ledger();
  }

  getTransactionById(id: number) {
    return this.ledger().find((t) => t.id === id);
  }

  addTransaction(transaction: Omit<Transaction, 'id'>) {
    const list = this.ledger();
    const newId = list.length ? list[list.length - 1].id + 1 : 1;

    this.ledger.set([...list, { id: newId, ...transaction }]);
  }

  updateTransaction(id: number, updatedData: Partial<Omit<Transaction, 'id'>>) {
    this.ledger.update((list) => list.map((t) => (t.id === id ? { ...updatedData, ...t } : t)));
  }

  deleteTransaction(id: number) {
    this.ledger.update((list) => list.filter((t) => t.id !== id));
  }

  clearLedger() {
    this.ledger.set([]);
  }
}
