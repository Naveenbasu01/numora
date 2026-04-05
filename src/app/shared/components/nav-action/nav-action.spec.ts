import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAction } from './nav-action';

describe('NavAction', () => {
  let component: NavAction;
  let fixture: ComponentFixture<NavAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
