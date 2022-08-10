import { createStore } from 'redux';
import { usersReducer } from './users_reducer';

export const store = createStore(usersReducer);
