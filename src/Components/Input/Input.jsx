import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './InputStyle';

const Input = ({
  className, id, label, type, value, name, onChange,
}) => (
  <div className={className}>
    <label htmlFor={name}>{label}</label>
    <input
      id={id || name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.bool),
  onChange: PropTypes.func,
};
export default InputStyle(Input);
