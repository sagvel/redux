import { createStore, combineReducers } from 'redux';
import { usersReducer } from './users.reducer';
import { counterReducer } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
