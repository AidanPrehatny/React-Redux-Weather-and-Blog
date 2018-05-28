import React from 'react';

import SearchBar from '../../containers/weather/search_bar';
import WeatherList from '../../containers/weather/weather_list';


const WeatherPage = () => (
  <div>
    <SearchBar />
    <WeatherList />
  </div>
);

export default WeatherPage;
