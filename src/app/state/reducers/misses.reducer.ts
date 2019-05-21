import { initialState } from '../state';
import { MissesActionTypes, MissesActions } from '../actions/misses.actions';

export function missesReducer(state = initialState, action: MissesActions) {
  switch (action.type) {
    case MissesActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        misses: [...state.misses, action.payload],
        missesForAdd: null
      };
    }

    case MissesActionTypes.UPDATE_SUCCESS: {
      return {
        ...state,
        misses: state.misses.map((misses) => {
          if (misses.id === action.payload.id) {
            return action.payload;
          }
          return misses;
        })
      };
    }

    case MissesActionTypes.DELETE_SUCCESS: {
      return {
        ...state,
        misses: state.misses.filter((miss) => miss.id !== action.payload)
      };
    }

    case MissesActionTypes.UPDATE_SELECT: {
      return {
        ...state,
        selectedMisses: [...action.payload]
      };
    }

    case MissesActionTypes.CLEAR_SELECT: {
      return {
        ...state,
        selectedMisses: []
      };
    }

    case MissesActionTypes.UPDATE_FILTERS: {
        return {
            ...state,
            filters: action.payload
        };
    }

    case MissesActionTypes.LOAD_SUCCESS: {
        return {
            ...state,
            misses: [...action.payload]
        };
    }
    default:
      return state;
  }
}
