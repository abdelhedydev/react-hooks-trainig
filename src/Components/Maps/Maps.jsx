import React from 'react';
import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import PropTypes from 'prop-types';


const Maps = ({ lat, lng }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat, lng }} />
  </GoogleMap>
);

Maps.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};
export default withScriptjs(withGoogleMap(Maps));
