import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

const reducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
