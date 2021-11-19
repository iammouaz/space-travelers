/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { registermissions, cancelmission } from '../redux/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const {
    id, mission_name, description, reserved,
  } = props;

  const missionClick = (id, reserved) => {
    if (reserved === false) {
      dispatch(registermissions(id));
    } else {
      dispatch(cancelmission(id));
    }
  };
  return (
    <tr key={id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        {reserved ? (
          <div className="badge bg-success">Active Member</div>
        ) : (
          <div className="badge bg-secondary">NOT A MEMBER</div>
        )}
      </td>
      <td>
        {reserved ? (
          <Button
            variant="outline-danger"
            onClick={() => missionClick(id, reserved)}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            variant="outline-primary"
            onClick={() => missionClick(id, reserved)}
          >
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
