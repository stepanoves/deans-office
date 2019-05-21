import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMissesComponent } from './edit-misses.component';

describe('EditMissesComponent', () => {
  let component: EditMissesComponent;
  let fixture: ComponentFixture<EditMissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditMissesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
