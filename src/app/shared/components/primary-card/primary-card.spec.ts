import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCard } from './primary-card';

describe('PrimaryCard', () => {
  let component: PrimaryCard;
  let fixture: ComponentFixture<PrimaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
