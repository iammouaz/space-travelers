/* eslint-disable camelcase */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission_id, mission_name, description,
  } = props;
  return (
    <tr key={mission_id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td><Button>Join Mission</Button></td>
    </tr>
  );
};

Mission.propTypes = {
  mission_id: PropTypes.number.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
