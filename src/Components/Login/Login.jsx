import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import LoginStyle from './LoginStyle';

const Login = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={className}>
      <div className="form">
        <Input type="text" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" label="Passoword" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <Button
        text="login"
      />
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default LoginStyle(Login);
