import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNotesComponent } from './change-notes.component';

describe('ChangeNotesComponent', () => {
  let component: ChangeNotesComponent;
  let fixture: ComponentFixture<ChangeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
