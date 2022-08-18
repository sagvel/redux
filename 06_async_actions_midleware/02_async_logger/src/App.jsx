import React from 'react';
import { Provider } from 'react-redux';
import SearchField from './users/SearchField';
import Spinner from './users/Spinner';
import store from './store';
import UserInfo from './users/UserInfo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <Spinner />
        <SearchField />
      </div>
    </Provider>
  );
};

export default App;
