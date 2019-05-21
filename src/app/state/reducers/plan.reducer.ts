import {initialState} from '../state';
import {PlansActions, PlansActionTypes} from '../actions/plan.actions';

export function plansReducer(state = initialState, action: PlansActions) {
  switch (action.type) {
    case PlansActionTypes.ADD_PLAN_SUCCESS: {
      return {
        ...state,
        groupPlans: [...state.groupPlans, action.payload]
      };
    }
    case PlansActionTypes.ADD_PLAN_SUBJECT_SUCCESS: {
      return {
        ...state,
        planSubjects: [...state.planSubjects, action.payload]
      };
    }
    case PlansActionTypes.UPDATE_PLAN_SUBJECT_SUCCESS: {
      return {
        ...state,
        planSubjects: state.planSubjects.map((subject) => {
          if (subject.id === action.payload.id) {
            return action.payload;
          }
          return subject;
        })
      };
    }
    case PlansActionTypes.LOAD_PLANS_SUCCESS: {
      return {
        ...state,
        groupPlans: action.payload
      };
    }
    case PlansActionTypes.DELETE_PLAN_SUCCESS: {
      return {
        ...state,
        misses: state.groupPlans.filter((plan) => plan.id !== action.payload)
      };
    }
    case PlansActionTypes.DELETE_PLAN_SUBJECT_SUCCESS: {
      return {
        ...state,
        misses: state.planSubjects.filter((subject) => subject.id !== action.payload)
      };
    }
    case PlansActionTypes.LOAD_PLAN_SUBJECTS_SUCCESS: {
      return {
        ...state,
        planSubjects: action.payload
      };
    }
    case PlansActionTypes.UPDATE_SELECT: {
      return {
        ...state,
        selectedPlanSubjects: [...action.payload]
      };
    }
    case PlansActionTypes.CLEAR_SELECT: {
      return {
        ...state,
        selectedPlanSubjects: []
      };
    }
    default:
  return state;
  }
}
