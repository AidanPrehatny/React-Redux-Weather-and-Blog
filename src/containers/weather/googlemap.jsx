import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const SimpleMap = (props) => {
    return (
      <div style={{ height: '200px', width: '250px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCbEXexX7QwrK14aGMnirWoG8sdJe2p8Ds" }}
          center={{
            lat: props.lat,
            lng: props.lon
          }}
          defaultZoom={12}
          >
          </GoogleMapReact>
        </div>
      );
  }

  function mapStateToProps( { weather }) {
    return { weather }; //same as { weather: weather}
  }

  export default connect(mapStateToProps)(SimpleMap);
