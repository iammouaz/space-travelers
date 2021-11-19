const GET_ROCKETS_SUCCESS = 'spaceTravelers/rockets/GET_ROCKETS_SUCCESS';
const REGISTER_ROCKET = 'spaceTravelers/rockets/REGISTER_ROCKET';
const CANCEL_REGISTER = 'spaceTravelers/rockets/CANCEL_REGISTER';

const defaultState = [];

const getRocketsList = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  const newList = [];

  rockets.forEach((rocket) => {
    const rocketDetails = {
      id: rocket.id,
      title: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
    };
    newList.push(rocketDetails);
  });
  dispatch({
    type: GET_ROCKETS_SUCCESS,
    payload: newList,
  });
};

const registerRocket = (id) => ({
  type: REGISTER_ROCKET,
  id,
});

const cancelRegister = (id) => ({
  type: CANCEL_REGISTER,
  id,
});

const rocketsRducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return [...action.payload];
    case REGISTER_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL_REGISTER:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export {
  rocketsRducer as default,
  getRocketsList,
  registerRocket,
  cancelRegister,
};
