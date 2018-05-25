import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{
      lat: props.lat,
      lng: props.lon
   }}
  >
  </GoogleMap>
))

export default MyMapComponent
