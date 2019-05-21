import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMissesComponent } from './print-misses.component';

describe('PrintMissesComponent', () => {
  let component: PrintMissesComponent;
  let fixture: ComponentFixture<PrintMissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMissesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
