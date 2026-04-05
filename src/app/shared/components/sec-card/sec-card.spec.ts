import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCard } from './sec-card';

describe('SecCard', () => {
  let component: SecCard;
  let fixture: ComponentFixture<SecCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
