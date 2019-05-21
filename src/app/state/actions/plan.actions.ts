import { Action } from '@ngrx/store';

import { Plan, PlanSubject} from '../models';

export enum PlansActionTypes {
  'ADD_PLAN' = '[Plans page] Add plans',
  'ADD_PLAN_SUCCESS' = '[Plans page] Add success plans',
  'ADD_PLAN_FAIL' = '[Plans page] Add fail plans',
  'ADD_PLAN_SUBJECT' = '[Plans page] Add plans',
  'ADD_PLAN_SUBJECT_SUCCESS' = '[Plans page] Add success plans',
  'ADD_PLAN_SUBJECT_FAIL' = '[Plans page] Add fail plans',
  'UPDATE_PLAN_SUBJECT' = '[Plans page] Update plans',
  'UPDATE_PLAN_SUBJECT_SUCCESS' = '[Plans page] Update success plans',
  'UPDATE_PLAN_SUBJECT_FAIL' = '[Plans page] Update fail plans',
  'UPDATE' = '[Plans page] Update plans',
  'UPDATE_SUCCESS' = '[Plans page] Update success plans',
  'UPDATE_FAIL' = '[Plans page] Update fail plans',
  'DELETE_PLAN' = '[Plans page] Delete plans',
  'DELETE_PLAN_SUCCESS' = '[Plans page] Delete success plans',
  'DELETE_PLAN_FAIL' = '[Plans page] Delete fail plans',
  'DELETE_PLAN_SUBJECT' = '[Plans page] Delete plans',
  'DELETE_PLAN_SUBJECT_SUCCESS' = '[Plans page] Delete success plans',
  'DELETE_PLAN_SUBJECT_FAIL' = '[Plans page] Delete fail plans',
  'LOAD_PLANS' = '[Plans page] Load plans',
  'LOAD_PLANS_SUCCESS' = '[Plans page] Load success plans',
  'LOAD_PLANS_FAIL' = '[Plans page] Load fail plans',
  'LOAD_PLAN_SUBJECTS' = '[Plans page] Load plan subjects',
  'LOAD_PLAN_SUBJECTS_SUCCESS' = '[Plans page] Load success plan subjects',
  'LOAD_PLAN_SUBJECTS_FAIL' = '[Plans page] Load fail plan subjects',
  'UPDATE_SELECT' = '[Plans page] Update select plans',
  'CLEAR_SELECT' = '[Plans page] Clear select plans'
}

export class Load implements Action {
  readonly type = PlansActionTypes.LOAD_PLANS;
}

export class LoadSuccess implements Action {
  readonly type = PlansActionTypes.LOAD_PLANS_SUCCESS;

  constructor(readonly payload: Plan[]) {}
}

export class LoadFail implements Action {
  readonly type = PlansActionTypes.LOAD_PLANS_FAIL;

  constructor(readonly payload: Error) {}
}

export class LoadPlanSubjects implements Action {
  readonly type = PlansActionTypes.LOAD_PLAN_SUBJECTS;
}

export class LoadPlanSubjectsSuccess implements Action {
  readonly type = PlansActionTypes.LOAD_PLAN_SUBJECTS_SUCCESS;

  constructor(readonly payload: PlanSubject[]) {}
}

export class LoadPlanSubjectsFail implements Action {
  readonly type = PlansActionTypes.LOAD_PLAN_SUBJECTS_FAIL;

  constructor(readonly payload: Error) {}
}

export class AddPlan implements Action {
  readonly type = PlansActionTypes.ADD_PLAN;

  constructor(readonly payload: Plan) {}
}

export class AddPlanSuccess implements Action {
  readonly type = PlansActionTypes.ADD_PLAN_SUCCESS;

  constructor(readonly payload: Plan) {}
}

export class AddPlanFail implements Action {
  readonly type = PlansActionTypes.ADD_PLAN_SUCCESS;

  constructor(readonly payload: Error) {}
}

export class AddPlanSubject implements Action {
  readonly type = PlansActionTypes.ADD_PLAN_SUBJECT;

  constructor(readonly payload: {planId: number, subject: PlanSubject}) {}
}

export class AddPlanSubjectSuccess implements Action {
  readonly type = PlansActionTypes.ADD_PLAN_SUBJECT_SUCCESS;

  constructor(readonly payload: PlanSubject) {}
}

export class AddPlanSubjectFail implements Action {
  readonly type = PlansActionTypes.ADD_PLAN_SUBJECT_FAIL;

  constructor(readonly payload: Error) {}
}

export class UpdatePlanSubject implements Action {
  readonly type = PlansActionTypes.UPDATE_PLAN_SUBJECT;

  constructor(readonly payload: {planId: number, subjectId: number, subject: PlanSubject}) {}
}

export class UpdatePlanSubjectSuccess implements Action {
  readonly type = PlansActionTypes.UPDATE_PLAN_SUBJECT_SUCCESS;

  constructor(readonly payload: PlanSubject) {}
}

export class UpdatePlanSubjectFail implements Action {
  readonly type = PlansActionTypes.UPDATE_PLAN_SUBJECT_FAIL;

  constructor(readonly payload: Error) {}
}

export class UpdateSuccess implements Action {
  readonly type = PlansActionTypes.UPDATE_SUCCESS;

  constructor(readonly payload: { id: number; plans: Plan }) {}
}

export class DeletePlanSuccess implements Action {
  readonly type = PlansActionTypes.DELETE_PLAN_SUCCESS;

  constructor(readonly payload: number) {}
}

export class DeletePlanSubjectSuccess implements Action {
  readonly type = PlansActionTypes.DELETE_PLAN_SUBJECT_SUCCESS;

  constructor(readonly payload: number) {}
}

export class UpdateSelect implements Action {
  readonly type = PlansActionTypes.UPDATE_SELECT;

  constructor(readonly payload: Plan[]) {}
}

export class ClearSelect implements Action {
  readonly type = PlansActionTypes.CLEAR_SELECT;
}

export type PlansActions =
  | Load
  | LoadSuccess
  | LoadPlanSubjects
  | LoadPlanSubjectsSuccess
  | AddPlan
  | AddPlanSuccess
  | AddPlanFail
  | AddPlanSubject
  | AddPlanSubjectSuccess
  | AddPlanSubjectFail
  | UpdateSuccess
  | DeletePlanSuccess
  | DeletePlanSubjectSuccess
  | UpdateSelect
  | ClearSelect;
