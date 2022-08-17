import { usersData } from '../api/users';
import { NEXT_PAGE, PREV_PAGE } from './users.actions';

const initialState = {
  usersList: usersData,
  currentPage: 0,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};
