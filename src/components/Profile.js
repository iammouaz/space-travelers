import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsRducer);
  const registeredRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Rockets</h2>

      <ul>
        {registeredRocket.map((rocket) => (
          <li key={rocket.id}>
            {rocket.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
