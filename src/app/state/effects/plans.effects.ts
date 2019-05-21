import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as plansActions from '../actions/plan.actions';
import {PlansService} from '../../services';

@Injectable()
export class PlansEffects {
  constructor(
    private actions$: Actions,
    private plansService: PlansService
  ) {}

  @Effect()
  loadPlans$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.LOAD_PLANS),
    switchMap((id: number) =>
      this.plansService.getGroupPlans(id).pipe(
        map(plans => new plansActions.LoadSuccess(plans)),
        catchError(err => of(new plansActions.LoadFail(err)))
      )
    )
  );
  @Effect()
  loadPlanSubjects$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.LOAD_PLAN_SUBJECTS),
    switchMap((id: number) =>
      this.plansService.getPlanSubjects(id).pipe(
        map(subjects => new plansActions.LoadPlanSubjectsSuccess(subjects)),
        catchError(err => of(new plansActions.LoadPlanSubjectsFail(err)))
      )
    )
  );

  @Effect()
  addPlans$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.ADD_PLAN),
    switchMap(plan =>
      this.plansService.postGroupPlans(plan).pipe(
        map(() => new plansActions.AddPlanSuccess(plan)),
        catchError(err => of(new plansActions.AddPlanFail(err)))
      )
    )
  );

  @Effect()
  addSubject$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.ADD_PLAN_SUBJECT),
    switchMap(({planId, subject}) =>
      this.plansService.postPlanSubjects(planId, subject).pipe(
        map(() => new plansActions.AddPlanSubjectSuccess(subject),
          catchError(err => of(new plansActions.AddPlanSubjectFail(err)))
        )
      )
    )
  );

  @Effect()
  updateSubject$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.ADD_PLAN_SUBJECT),
    switchMap(({planId, subject}) =>
      this.plansService.postPlanSubjects(planId, subject).pipe(
        map(() => new plansActions.UpdatePlanSubjectSuccess(subject),
          catchError(err => of(new plansActions.AddPlanSubjectFail(err)))
        )
      )
    )
  );

  @Effect()
  deletePlans$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.DELETE_PLAN),
    switchMap((plansId) =>
      this.plansService.deleteGroupPlans(plansId).pipe(
        map(() => new plansActions.DeletePlanSuccess(plansId)),
        catchError(err => of({})))
    )
  );

  @Effect()
  deletePlanSubject$ = this.actions$.pipe(
    ofType(plansActions.PlansActionTypes.DELETE_PLAN_SUBJECT),
    switchMap((plansId, subjectId) =>
      this.plansService.deletePlanSubjects(plansId, subjectId).pipe(
        map(() => new plansActions.DeletePlanSubjectSuccess(subjectId)),
        catchError(err => of({})))
    )
  );
}
