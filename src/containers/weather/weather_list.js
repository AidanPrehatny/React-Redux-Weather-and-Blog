import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../../components/chart';
import MyMapComponent from '../../components/weather/reactmap';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData ? cityData.city.name : null
    const temps = cityData ? cityData.list.map(weather => weather.main.temp) : null
    const pressure = cityData ? cityData.list.map(weather => weather.main.pressure) : null
    const humidity = cityData ? cityData.list.map(weather => weather.main.humidity) : null
    const lon = cityData ? cityData.city.coord.lon : null
    const lat = cityData ? cityData.city.coord.lat : null
    console.log(cityData)

    return (
      lon ?
        <tr key={name}>
        <td>
          <MyMapComponent
            isMarkerShown={false}
            lat={lat}
            lon={lon}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key="
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `200px`, width: `250px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>

        <td>
          <Chart data={pressure} color="purple" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
      :
      null
    )
  }

  render() {


    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              City
            </th>
            <th>
              Temperature (K)
            </th>
            <th>
              Pressure (hPa)
            </th>
            <th>
              Humidity (%)
            </th>
          </tr>
        </thead>
        <tbody>
         {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( { weather }) {
  return { weather }; //same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
