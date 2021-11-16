import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketsList } from '../redux/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    const loadRockets = async () => {
      await dispatch(getRocketsList());
    };
    if (display.length === 0) {
      loadRockets();
    }
  }, []);

  return (
    <div>
      <ul className="rockets-list">
        {display.map((rocket) => (
          <Rocket
            id={rocket.id}
            key={rocket.id}
            title={rocket.title}
            image={rocket.image}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
