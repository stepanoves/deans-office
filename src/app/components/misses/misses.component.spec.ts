import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissesComponent } from './misses.component';

describe('MissesComponent', () => {
  let component: MissesComponent;
  let fixture: ComponentFixture<MissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
