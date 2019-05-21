import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFiltersComponent } from './plan-filters.component';

describe('PlanFiltersComponent', () => {
  let component: PlanFiltersComponent;
  let fixture: ComponentFixture<PlanFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
