import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissesComponent } from './add-misses.component';

describe('AddMissesComponent', () => {
  let component: AddMissesComponent;
  let fixture: ComponentFixture<AddMissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddMissesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
