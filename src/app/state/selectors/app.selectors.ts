import { State } from './../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const app = createFeatureSelector('app');

export const getGroups = createSelector(
  app,
  (state: State) => state.groups,
);

export const getDepartments = createSelector(
  app,
  (state: State) => state.departments,
);

export const getTeachers = createSelector(
  app,
  (state: State) => state.teachers,
);

export const getStudents = createSelector(
  app,
  (state: State) => state.students,
);

export const getSubjects = createSelector(
  app,
  (state: State) => state.subjects,
);

export const getMenuVisible = createSelector(
  app,
  (state: State) => state.headerMenuVisible,
);
