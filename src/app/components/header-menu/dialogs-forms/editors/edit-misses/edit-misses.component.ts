import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

import { State } from '../../../../../state/state';
import { Teacher } from '../../../../../state/models/teacher.model';
import {
  getDepartments,
  getGroups,
  getStudents,
  getSubjects,
  getTeachers,
} from '../../../../../state/selectors/app.selectors';
import { getSelected } from '../../../../../state/selectors/misses.selectors';
import * as missesActions from '../../../../../state/actions/misses.actions';
import { briefInfo } from '../../../../../constants/constants';

@Component({
  selector: 'app-edit-misses',
  templateUrl: './edit-misses.component.html',
  styleUrls: ['./edit-misses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditMissesComponent implements OnInit, OnDestroy {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  private destroy$ = new Subject<boolean>();

  @Input() isEdit = false;

  public departments$ = this.store.select(getDepartments);
  public students$ = this.store.select(getStudents);
  public teachers$ = this.store.select(getTeachers);
  public subjects$ = this.store.select(getSubjects);
  public selected$ = this.store.select(getSelected);
  public groups$ = this.store.select(getGroups);
  public editMissesForm: FormGroup;
  public addAction = missesActions.Add;
  public editAction = missesActions.Update;
  public preDispatch = [
    'LOAD_DEPARTMENTS',
    'LOAD_GROUPS',
    'LOAD_TEACHERS',
    'LOAD_SUBJECTS',
    'LOAD_STUDENTS',
  ];
  public briefInfo = briefInfo.misses;

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
  }

  public ngOnInit(): void {
    this.editMissesForm = this.formBuilder.group({
      department: ['', Validators.required],
      group: ['', [Validators.required]],
      student: [{ value: '', disabled: true }, Validators.required],
      subject: ['', Validators.required],
      date: ['', Validators.required],
      hours: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*[.]?[0-9]+$')],
      ],
      type: ['', Validators.required],
      teacher: ['', Validators.required],
      teacherRank: [{ value: '', disabled: true }, Validators.required],
      hourCost: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*[.]?[0-9]+$')],
      ],
    });

    this.editMissesForm
      .get('teacher')
      .valueChanges.pipe(
        switchMap(() => this.teachers$),
        map(data =>
          data.find(el => el.id === this.editMissesForm.get('teacher').value),
        ),
      takeUntil(this.destroy$),
      )
      .subscribe((data: Teacher) => {
        this.editMissesForm.get('teacherRank').patchValue(data.rank);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
