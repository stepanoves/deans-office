import { State } from './../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const notes = createFeatureSelector('notes');

export const getFilters = createSelector(
    notes,
    (state: State) => state.filters
);

export const getSelected = createSelector(
    notes,
    (state: State) => state.selectedNotes
)

export const getNotes = createSelector(
    notes,
    (state: State) => state.notes
)