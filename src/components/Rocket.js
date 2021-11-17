import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { registerRocket, cancelRegister } from '../redux/rockets';

const Rocket = (props) => {
  const {
    id, image, title, description, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserveRocket = () => {
    if (!reserved) {
      dispatch(registerRocket(id));
    } else if (reserved) {
      dispatch(cancelRegister(id));
    }
  };
  return (
    <li key={id}>
      <img src={image} alt="rocket-img" />
      <h2>{title}</h2>
      {reserved && (
      <div>
        <div>
          <p>reserved</p>
          <p>{description}</p>
        </div>
        <button onClick={reserveRocket} type="button">cancel reservation</button>
      </div>
      )}
      {!reserved && (
      <div>
        <div>
          <p>{description}</p>
        </div>
        <button onClick={reserveRocket} type="button">reserve rocket</button>
      </div>
      )}
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
