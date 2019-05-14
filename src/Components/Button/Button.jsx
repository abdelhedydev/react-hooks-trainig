import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

const Button = ({
  className, text, onClick, onChange,
}) => (
  <div className={className}>
    <button
      onChange={onChange}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
export default ButtonStyle(Button);
