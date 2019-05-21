import { State } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const journal = createFeatureSelector('journal');

export const getJournal = createSelector(
  journal,
  (state: State) => state.journal,
);
