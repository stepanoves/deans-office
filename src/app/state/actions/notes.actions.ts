import { Filters, Notes } from '../models';
import { Action } from '@ngrx/store';

export enum NotesActionTypes {
  'ADD' = '[Notes page] Add misses',
  'ADD_SUCCESS' = '[Notes page] Add success misses',
  'ADD_FAIL' = '[Notes page] Add fail misses',
  'UPDATE' = '[Notes page] Update misses',
  'UPDATE_SUCCESS' = '[Notes page] Update success misses',
  'UPDATE_FAIL' = '[Notes page] Update fail misses',
  'DELETE' = '[Notes page] Delete misses',
  'DELETE_SUCCESS' = '[Notes page] Delete success misses',
  'DELETE_FAIL' = '[Notes page] Delete fail misses',
  'LOAD' = '[Notes page] Load misses',
  'LOAD_SUCCESS' = '[Notes page] Load success misses',
  'LOAD_FAIL' = '[Notes page] Load fail misses',
  'UPDATE_SELECT' = '[Notes page] Update select misses',
  'CLEAR_SELECT' = '[Notes page] Clear select misses',
  'UPDATE_FILTERS' = '[Notes page] Update filters misses',
}

export class Load implements Action {
  readonly type = NotesActionTypes.LOAD;
}

export class LoadSuccess implements Action {
  readonly type = NotesActionTypes.LOAD_SUCCESS;

  constructor(readonly payload: Notes[]) {}
}

export class LoadFail implements Action {
  readonly type = NotesActionTypes.LOAD_FAIL;

  constructor(readonly payload: Error) {}
}

export class Add implements Action {
  readonly type = NotesActionTypes.ADD;

  constructor(readonly payload: Notes) {}
}

export class AddSuccess implements Action {
  readonly type = NotesActionTypes.ADD_SUCCESS;

  constructor(readonly payload: Notes) {}
}

export class AddFail implements Action {
  readonly type = NotesActionTypes.ADD_SUCCESS;

  constructor(readonly payload: Error) {}
}

export class Update implements Action {
  readonly type = NotesActionTypes.UPDATE_SUCCESS;

  constructor(readonly payload: { id: number; misses: Notes }) {}
}

export class UpdateSuccess implements Action {
  readonly type = NotesActionTypes.UPDATE_SUCCESS;

  constructor(readonly payload: Notes) {}
}

export class DeleteSuccess implements Action {
  readonly type = NotesActionTypes.DELETE_SUCCESS;

  constructor(readonly payload: number) {}
}

export class UpdateSelect implements Action {
  readonly type = NotesActionTypes.UPDATE_SELECT;

  constructor(readonly payload: Notes[]) {}
}

export class ClearSelect implements Action {
  readonly type = NotesActionTypes.CLEAR_SELECT;
}

export class UpdateFilters implements Action {
  readonly type = NotesActionTypes.UPDATE_FILTERS;

  constructor(readonly payload: Filters) {}
}

export type NotesActions =
  | Load
  | LoadSuccess
  | Add
  | AddSuccess
  | AddFail
  | Update
  | UpdateSuccess
  | DeleteSuccess
  | UpdateSelect
  | ClearSelect
  | UpdateFilters;
