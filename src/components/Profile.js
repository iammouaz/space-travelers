import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsRducer);
  const registeredRocket = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.MissionReducer);
  const registerMisson = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>
          <h2>My Rockets</h2>
          <ListGroup>
            {registeredRocket.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div>
          <h2>My Missiosn </h2>
          <ListGroup>
            {registerMisson.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;
