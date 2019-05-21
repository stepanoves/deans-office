import { initialState } from '../state';
import { JournalActions, JournalActionTypes } from '../actions/journal.actions';

export function journalReducer(state = initialState, action: JournalActions) {
  switch (action.type) {
    case JournalActionTypes.LOAD_SUCCESS: {
      return {
        ...state,
        journal: action.payload,
      };
    }

    default:
      return state;
  }
}
