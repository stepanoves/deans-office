import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFiltersComponent } from './notes-filters.component';

describe('NotesFiltersComponent', () => {
  let component: NotesFiltersComponent;
  let fixture: ComponentFixture<NotesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
