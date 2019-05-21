import { initialState } from '../state';
import { NotesActions, NotesActionTypes } from '../actions/notes.actions';

export function notesReducer(state = initialState, action: NotesActions) {
  switch (action.type) {
    case NotesActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
        notesForAdd: null,
      };
    }

    case NotesActionTypes.UPDATE_SUCCESS: {
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        }),
      };
    }

    case NotesActionTypes.DELETE_SUCCESS: {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    }

    case NotesActionTypes.UPDATE_SELECT: {
      return {
        ...state,
        selectedNotes: [...action.payload],
      };
    }

    case NotesActionTypes.CLEAR_SELECT: {
      return {
        ...state,
        selectedNotes: [],
      };
    }

    case NotesActionTypes.UPDATE_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      };
    }

    case NotesActionTypes.LOAD_SUCCESS: {
      return {
        ...state,
        notes: [...action.payload],
      };
    }
    default:
      return state;
  }
}
