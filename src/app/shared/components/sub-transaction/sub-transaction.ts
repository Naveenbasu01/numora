import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-transaction',
  imports: [],
  templateUrl: './sub-transaction.html',
  styleUrl: './sub-transaction.scss',
})
export class SubTransaction {
  @Input() transaction: any;
}
