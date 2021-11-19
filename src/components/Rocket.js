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
    <li key={id} className="row">
      <img src={image} className="img-thumbnail col-sm-3" alt="rocket-img" />
      {reserved && (
        <div className="col-sm-9  flex-column ">
          <h2>{title}</h2>
          <div className="d-inline-flex ">
            <span className="bg-success text-white">reserved</span>
            {description}
          </div>
          <button onClick={reserveRocket} type="button" className="btn btn-outline-secondary">cancel reservation</button>
        </div>
      )}
      {!reserved && (
        <div className="col-sm-9">
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <button onClick={reserveRocket} type="button" className="btn btn-primary">reserve rocket</button>
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
