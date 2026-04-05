import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Transaction } from '../../constants/ledger';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../service/trasaction-service';
import { CoreService } from '../../service/core-service';

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
  deleteCheck: boolean = false;
  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private coreService: CoreService,
  ) {
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', Validators.required],
      date: [this.today(), Validators.required],
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
    } else {
      this.transactionForm.get('type')?.patchValue(this.coreService.isModalType());
    }
  }

  private today(): string {
    return new Date().toISOString().split('T')[0];
  }

  toggleDelete(event: any) {
    const value = event.target.checked;
    this.deleteCheck = value;
  }

  submit() {
    if (this.deleteCheck && this.data?.id) {
      this.transactionService.deleteTransaction(this.data.id);
      this.close.emit();
    } else {
      if (this.transactionForm.valid) {
        console.log('transaction-form :', this.transactionForm.value);
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
}
