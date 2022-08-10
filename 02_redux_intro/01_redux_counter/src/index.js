import { createStore } from 'redux';
// algo
// 1. Declarete variables of action types
// 2. Create Action Creators
// 3. Create Reducer
// 4. Create Store
// 5 dispatch actions and test code

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

// test data

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());

// console.log(store.getState());
