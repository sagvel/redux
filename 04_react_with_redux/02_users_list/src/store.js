import { createStore, combineReducers } from 'redux';
import { usersReduser } from './users/users.reducer';
const appReducer = combineReducers({
  users: usersReduser,
});
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
