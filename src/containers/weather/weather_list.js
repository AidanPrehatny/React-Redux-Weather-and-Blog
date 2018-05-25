import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";

import Chart from '../../components/chart';


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRHJVl9WCfo1P4_a5Kqx0yYCEsLF0btB8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px`, width: `250px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: props.lat,
        lng: props.lon
      }}
      >
      </GoogleMap>
    )
  }
)


class WeatherList extends Component {

  state ={
    searchedCities: ['something']
  }

  renderWeather(cityData, index) {
    const temps = cityData ? cityData.list.map(weather => weather.main.temp) : null
    const pressure = cityData ? cityData.list.map(weather => weather.main.pressure) : null
    const humidity = cityData ? cityData.list.map(weather => weather.main.humidity) : null
    const lon = cityData ? cityData.city.coord.lon : null
    const lat = cityData ? cityData.city.coord.lat : null
    console.log(cityData)


    return (
      lon
      ?
      <tr key={index}>
        <td>
          <MyMapComponent
            isMarkerShown={false}
            lat={lat}
            lon={lon}
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

    console.log( this.props.weather)
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
