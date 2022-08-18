import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, getWeaterData }) => {
  useEffect(() => {
    getWeaterData();
  }, []);

  if (!weatherData) {
    return null;
  }

  return (
    <ul className="cities-list">
      {weatherData.map(({ id, name, temperature }) => (
        <li className="city" key={id}>
          <span className="city__name">{name}</span>
          <span className="city__temperature">{`${temperature} F`}</span>
        </li>
      ))}
    </ul>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeaterData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
