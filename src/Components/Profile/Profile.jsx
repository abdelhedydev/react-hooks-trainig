/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { get } from 'lodash';
import Maps from '../Maps';

import ProfileStyle from './ProfileStyle';

const Profile = ({ className, match, history }) => {
  const [user, setUser] = useState({});
  const id = get(match.params, 'id');
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/`)
      .then(({ data }) => {
        setUser(data);
      });
  }, [id]);
  return (
    <div className={className}>
      <button onClick={history.goBack} type="button">Go Back 🔴</button>
      <h1>{user.name}</h1>
      {
        user.address && (
          <Maps
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIhpJq020_wC4lU6ich8NxfgRGJz9uf1U&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            lat={user.address.geo.lat}
            lng={user.address.geo.lng}
          />
        )
      }
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object,
  history: PropTypes.func,
};
export default ProfileStyle(Profile);
