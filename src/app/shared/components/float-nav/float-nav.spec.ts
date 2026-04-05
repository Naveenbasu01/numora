import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatNav } from './float-nav';

describe('FloatNav', () => {
  let component: FloatNav;
  let fixture: ComponentFixture<FloatNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
