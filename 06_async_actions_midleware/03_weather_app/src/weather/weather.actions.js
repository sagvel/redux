import { getData } from './weather.gateway';

export const ADD_DATA = 'WEATHER/ADD_DATA';

export const addData = weatherData => {
  return {
    type: ADD_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getData().then(data => {
      dispatch(addData(data));
    });
  };
};
