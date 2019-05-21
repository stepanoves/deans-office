import { initialState } from '../state';
import { AppActions, AppActionTypes } from '../actions/app.actions';

export function appReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case AppActionTypes.CHANGE_VISIBLE: {
      return {
        ...state,
        headerMenuVisible: action.payload,
      };
    }
    case AppActionTypes.LOAD_GROUPS_SUCCESS: {
      return {
        ...state,
        groups: action.payload,
      };
    }
    case AppActionTypes.LOAD_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        departments: action.payload,
      };
    }

    case AppActionTypes.LOAD_STUDENTS_SUCCESS: {
      return {
        ...state,
        students: action.payload,
      };
    }

    case AppActionTypes.LOAD_TEACHERS_SUCCESS: {
      return {
        ...state,
        teachers: action.payload,
      };
    }

    case AppActionTypes.LOAD_SUBJECTS_SUCCESS: {
      return {
        ...state,
        subjects: action.payload,
      };
    }

    default:
      return state;
  }
}
