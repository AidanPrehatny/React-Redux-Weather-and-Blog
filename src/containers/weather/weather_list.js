import React from 'react';
import { connect } from 'react-redux';

import SimpleMap from './googlemap';
import Chart from '../../components/chart';

const WeatherList = props => (
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
      {props.weather.map((cityData, index) => {
        const temps = cityData ? cityData.list.map(weather => weather.main.temp) : null;
        const pressure = cityData ? cityData.list.map(weather => weather.main.pressure) : null;
        const humidity = cityData ? cityData.list.map(weather => weather.main.humidity) : null;
        const lon = cityData ? cityData.city.coord.lon : null;
        const lat = cityData ? cityData.city.coord.lat : null;
        return (
          lon ?
            <tr key={cityData.city.id}>
              <td>
                <SimpleMap
                  lat={lat}
                  lon={lon}
                  index={index}
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
          null);
      })
    }
    </tbody>
  </table>
);
function mapStateToProps({ weather }) {
  return { weather }; // same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
