import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphChart } from './graph-chart';

describe('GraphChart', () => {
  let component: GraphChart;
  let fixture: ComponentFixture<GraphChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
