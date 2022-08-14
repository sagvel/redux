import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 3, name: 'bread' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(removeProduct(2));
store.dispatch(setUser({ name: 'Vasil' }));
store.dispatch(setUser({ name: 'Alex' }));
store.dispatch(removeUser());
