import { Action } from '@ngrx/store';

import { Journal } from '../models';

export enum JournalActionTypes {
  'UPDATE' = '[Journal page] Update journal',
  'UPDATE_SUCCESS' = '[Journal page] Update success journal',
  'UPDATE_FAIL' = '[Journal page] Update fail journal',
  'LOAD' = '[Journal page] Load journal',
  'LOAD_SUCCESS' = '[Journal page] Load success journal',
  'LOAD_FAIL' = '[Journal page] Load fail journal',
}

export class Load implements Action {
  readonly type = JournalActionTypes.LOAD;

  constructor(readonly payload: { planId: number; subjectId: number }) {
  }
}

export class LoadSuccess implements Action {
  readonly type = JournalActionTypes.LOAD_SUCCESS;

  constructor(readonly payload: Journal) {}
}

export class LoadFail implements Action {
  readonly type = JournalActionTypes.LOAD_FAIL;

  constructor(readonly payload: Error) {}
}

export class Update implements Action {
  readonly type = JournalActionTypes.UPDATE;

  constructor(readonly payload: { id: number; journal: Journal }) {}
}

export class UpdateSuccess implements Action {
  readonly type = JournalActionTypes.UPDATE_SUCCESS;

  constructor(readonly payload: Journal) {}
}

export type JournalActions = Load | LoadSuccess | Update | UpdateSuccess;
