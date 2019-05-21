import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMissesComponent } from './change-misses.component';

describe('ChangeMissesComponent', () => {
  let component: ChangeMissesComponent;
  let fixture: ComponentFixture<ChangeMissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMissesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
