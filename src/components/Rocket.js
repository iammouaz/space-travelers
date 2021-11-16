import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, image, title, description, reserved,
  } = props;
  return (
    <li key={id}>
      <img src={image} alt="rocket-img" />
      <h2>{title}</h2>
      <p>
        {reserved}
        {description}
      </p>
      <button type="button">reserve rocket</button>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
