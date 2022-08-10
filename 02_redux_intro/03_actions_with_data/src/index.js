import { store } from './store';
import { addUser, deleteUser } from './users_actions';

store.dispatch(addUser(1, 'Anna'));
console.log(store.getState());
store.dispatch(addUser(2, 'Bob'));
console.log(store.getState());
store.dispatch(deleteUser(1));
console.log(store.getState());
