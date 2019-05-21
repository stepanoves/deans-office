import { State } from './../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const misses = createFeatureSelector('misses');

export const getFilters = createSelector(
  misses,
  (state: State) => state.filters,
);

export const getSelected = createSelector(
  misses,
  (state: State) => state.selectedMisses,
);

export const getMisses = createSelector(
  misses,
  (state: State) => state.misses,
);
