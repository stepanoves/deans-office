import { Action } from '@ngrx/store';

import { Filters, Misses } from '../models';

export enum MissesActionTypes {
  'ADD' = '[Misses page] Add misses',
  'ADD_SUCCESS' = '[Misses page] Add success misses',
  'ADD_FAIL' = '[Misses page] Add fail misses',
  'ADD_MORE' = '[Misses page] Add more misses',
  'ADD_MORE_SUCCESS' = '[Misses page] Add more success misses',
  'ADD_MORE_FAIL' = '[Misses page] Add more fail misses',
  'REMOVE_ITEM' = '[Misses page] Remove item misses',
  'UPDATE' = '[Misses page] Update misses',
  'UPDATE_SUCCESS' = '[Misses page] Update success misses',
  'UPDATE_FAIL' = '[Misses page] Update fail misses',
  'DELETE' = '[Misses page] Delete misses',
  'DELETE_SUCCESS' = '[Misses page] Delete success misses',
  'DELETE_FAIL' = '[Misses page] Delete fail misses',
  'LOAD' = '[Misses page] Load misses',
  'LOAD_SUCCESS' = '[Misses page] Load success misses',
  'LOAD_FAIL' = '[Misses page] Load fail misses',
  'UPDATE_SELECT' = '[Misses page] Update select misses',
  'CLEAR_SELECT' = '[Misses page] Clear select misses',
  'UPDATE_FILTERS' = '[Misses page] Update filters misses',
}

export class Load implements Action {
  readonly type = MissesActionTypes.LOAD;
}

export class LoadSuccess implements Action {
  readonly type = MissesActionTypes.LOAD_SUCCESS;

  constructor(readonly payload: Misses[]) {}
}

export class LoadFail implements Action {
  readonly type = MissesActionTypes.LOAD_FAIL;

  constructor(readonly payload: Error) {}
}

export class Add implements Action {
  readonly type = MissesActionTypes.ADD;

  constructor(readonly payload: Misses) {}
}

export class AddSuccess implements Action {
  readonly type = MissesActionTypes.ADD_SUCCESS;

  constructor(readonly payload: Misses) {}
}

export class AddFail implements Action {
  readonly type = MissesActionTypes.ADD_SUCCESS;

  constructor(readonly payload: Error) {}
}

export class AddMore implements Action {
  readonly type = MissesActionTypes.ADD_MORE;

  constructor(readonly payload: Misses) {}
}

export class AddMoreSuccess implements Action {
  readonly type = MissesActionTypes.ADD_MORE_SUCCESS;
}

export class AddMoreFail implements Action {
  readonly type = MissesActionTypes.ADD_MORE_FAIL;

  constructor(readonly payload: Error) {}
}

export class RemoveItem implements Action {
  readonly type = MissesActionTypes.REMOVE_ITEM;

  constructor(readonly payload: number) {}
}

export class Update implements Action {
  readonly type = MissesActionTypes.UPDATE;

  constructor(readonly payload: { id: number; misses: Misses }) {}
}

export class UpdateSuccess implements Action {
  readonly type = MissesActionTypes.UPDATE_SUCCESS;

  constructor(readonly payload: Misses) {}
}

export class DeleteSuccess implements Action {
  readonly type = MissesActionTypes.DELETE_SUCCESS;

  constructor(readonly payload: number) {}
}

export class UpdateSelect implements Action {
  readonly type = MissesActionTypes.UPDATE_SELECT;

  constructor(readonly payload: Misses[]) {}
}

export class ClearSelect implements Action {
  readonly type = MissesActionTypes.CLEAR_SELECT;
}

export class UpdateFilters implements Action {
  readonly type = MissesActionTypes.UPDATE_FILTERS;

  constructor(readonly payload: Filters) {}
}

export type MissesActions =
  | Load
  | LoadSuccess
  | Add
  | AddSuccess
  | AddFail
  | AddMore
  | AddMoreSuccess
  | AddMoreFail
  | RemoveItem
  | UpdateSuccess
  | DeleteSuccess
  | UpdateSelect
  | ClearSelect
  | UpdateFilters;
