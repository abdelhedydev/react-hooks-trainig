import React from 'react';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';

const Card = ({
  className, name, username,
}) => (
  <div className={className}>
    <img
      src="https://image.flaticon.com/icons/svg/236/236832.svg"
      className="card__img"
      alt=""
    />
    <h1 className="card__name">{name}</h1>
    <h2 className="card__username">{username}</h2>
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
};
export default CardStyle(Card);
