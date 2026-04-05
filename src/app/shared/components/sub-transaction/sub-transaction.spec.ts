import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTransaction } from './sub-transaction';

describe('SubTransaction', () => {
  let component: SubTransaction;
  let fixture: ComponentFixture<SubTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTransaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
