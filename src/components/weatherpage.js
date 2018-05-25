import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'


export default class WeatherPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
