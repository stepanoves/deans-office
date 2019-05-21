import { AppService } from '../../app.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as appActions from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  @Effect()
  loadGroups$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LOAD_GROUPS),
    switchMap(() =>
      this.appService.getGroups().pipe(
        map(groups => new appActions.LoadGroupsSuccess(groups)),
        catchError(err => of(new appActions.LoadGroupsFail())),
      ),
    ),
  );

  @Effect()
  loadDepartments$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LOAD_DEPARTMENTS),
    switchMap(() =>
      this.appService.getDepartments().pipe(
        map(departments => new appActions.LoadDepartmentsSuccess(departments)),
        catchError(err => of(new appActions.LoadDepartmentsFail())),
      ),
    ),
  );

  @Effect()
  loadTeachers$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LOAD_TEACHERS),
    switchMap(() =>
      this.appService.getTeachers().pipe(
        map(teachers => new appActions.LoadTeachersSuccess(teachers)),
        catchError(err => of(new appActions.LoadTeachersFail())),
      ),
    ),
  );

  @Effect()
  loadStudents$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LOAD_STUDENTS),
    switchMap(() =>
      this.appService.getStudents().pipe(
        map(students => new appActions.LoadStudentsSuccess(students)),
        catchError(err => of(new appActions.LoadStudentsFail())),
      ),
    ),
  );

  @Effect()
  loadSubjects$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LOAD_SUBJECTS),
    switchMap(() =>
      this.appService.getSubjects().pipe(
        map(subjects => new appActions.LoadSubjectsSuccess(subjects)),
        catchError(err => of(new appActions.LoadSubjectsFail())),
      ),
    ),
  );
}
