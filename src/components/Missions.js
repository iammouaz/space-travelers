import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import Mission from './Mission';
import { getMisstions } from '../redux/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const MissionsState = useSelector((state) => state.MissionReducer);
  useEffect(() => {
    if (MissionsState.length === 0) {
      dispatch(getMisstions());
    }
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {MissionsState.map((mission) => (
          <Mission
            id={mission.mission_id}
            key={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
          />
        ))}
      </thead>
    </Table>
  );
};

export default Missions;
