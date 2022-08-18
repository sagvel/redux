import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';

const App = () => {
  return (
    <Provider store={store}>
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <Weather />
      </main>
    </Provider>
  );
};

export default App;
