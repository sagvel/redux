import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 21, name: 'Anna' }));
console.log(store.getState());
store.dispatch(addUser({ id: 1, name: 'Bob' }));
console.log(store.getState());
store.dispatch(deleteUser(1));
console.log(store.getState());
