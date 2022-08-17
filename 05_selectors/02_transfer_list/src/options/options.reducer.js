import { optionsList } from '../api/optionsList';
import { TOGGLE_OPTION } from './options.actions';

const initialState = {
  optionsList,
  selected: [],
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelectedIds = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : [...state.selected, optionId];
      return {
        ...state,
        selected: newSelectedIds,
      };
    }
    default:
      return state;
  }
};
