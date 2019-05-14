/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { map, filter } from 'lodash';
import Card from '../Card';
import Input from '../Input';
import UsersStyle from './UsersStyle';

const Users = ({ className, history }) => {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState(' ');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(({ data }) => {
        setAdmins(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    filter(admins, admin => admin.name === name);
  }, [admins, name]);
  return (
    <div className={className}>
      <Input type="text" label="Search ... " value={name} onChange={e => setName(e.target.value)} />
      {map(admins, (admin, key) => (
        <div
          key={key}
          onClick={() => history.push(`/profile/${admin.id}`)}
        >
          <Card
            name={admin.name}
            username={admin.username}
          />
        </div>
      ))}
    </div>
  );
};

Users.propTypes = {
  className: PropTypes.string,
  history: PropTypes.func,
};
export default UsersStyle(Users);
