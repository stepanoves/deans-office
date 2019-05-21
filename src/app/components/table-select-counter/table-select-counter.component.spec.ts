import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectCounterComponent } from './table-select-counter.component';

describe('TableSelectCounterComponent', () => {
  let component: TableSelectCounterComponent;
  let fixture: ComponentFixture<TableSelectCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
