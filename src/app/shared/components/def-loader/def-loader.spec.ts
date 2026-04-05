import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefLoader } from './def-loader';

describe('DefLoader', () => {
  let component: DefLoader;
  let fixture: ComponentFixture<DefLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
