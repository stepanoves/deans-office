import { State } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const plans = createFeatureSelector('plans');

export const getGroupPlans = createSelector(
  plans,
  (state: State) => state.groupPlans
);

export const getPlanSubjects = createSelector(
  plans,
  (state: State) => state.planSubjects
);

export const getSelectedPlanSubjects = createSelector(
  plans,
  (state: State) => state.selectedPlanSubjects
);
