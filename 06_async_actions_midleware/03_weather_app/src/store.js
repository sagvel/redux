import { createStore, combineReducers, applyMiddleware } from 'redux';
import { weatherReducer } from './weather/weather.reducer';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
