import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Transaction } from '../../constants/ledger';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-modal',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-modal.html',
  styleUrl: './transaction-modal.scss',
})
export class TransactionModal {
  @Input() data?: Transaction; // edit mode if exists
  @Output() save = new EventEmitter<Omit<Transaction, 'id'>>();
  @Output() close = new EventEmitter<void>();
  transactionForm!: FormGroup;
  errorTxt: any;
  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['', Validators.required],
    });
  }

  categories = [
    'Salary',
    'Food',
    'Transport',
    'Shopping',
    'Bills',
    'Savings',
    'Entertainment',
    'Self',
  ];

  ngOnInit() {
    if (this.data) {
      const { id, ...rest } = this.data;
      this.transactionForm.patchValue({ ...rest });
    }
  }

  submit() {
    if (this.transactionForm.valid) {
      this.save.emit(this.transactionForm.value);
    } else {
      this.errorTxt = 'Please fill the form';
      setTimeout(() => {
        this.errorTxt = null;
        console.log('error-txt :', this.errorTxt);
      }, 3000);
    }
  }
}
