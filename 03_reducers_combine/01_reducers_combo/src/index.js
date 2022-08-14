import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 21, name: 'Anna' }));
store.dispatch(addUser({ id: 1, name: 'Bob' }));
store.dispatch(deleteUser(1));
store.dispatch(updateUser(21, { id: 5, name: 'Berck' }));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
