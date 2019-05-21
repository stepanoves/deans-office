import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissesFiltersComponent } from './misses-filters.component';

describe('MissesFiltersComponent', () => {
  let component: MissesFiltersComponent;
  let fixture: ComponentFixture<MissesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissesFiltersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
