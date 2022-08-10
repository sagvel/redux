import { store, increment, decrement, reset } from './store';

const incrementBtn = document.querySelector('[data-action=increment]');
const decrementBtn = document.querySelector('[data-action=decrement]');
const resetBtn = document.querySelector('[data-action=reset]');
const renderElem = document.querySelector('.counter__result');

const incrementHandler = () => {
  store.dispatch(increment());
};

const decrementBtnHandler = () => {
  store.dispatch(decrement());
};

const resetHandler = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', incrementHandler);
decrementBtn.addEventListener('click', decrementBtnHandler);
resetBtn.addEventListener('click', resetHandler);

store.subscribe(() => {
  const state = store.getState();
  const value = state.history.reduce((acc, val) => acc + Number(val), 0);
  const history = state.history.join('');
  renderElem.textContent = state.history.length === 0 ? '' : `${history} = ${value}`;
});
