const GET_MISSIONS_SUCCESS = 'spaceTravelers/rockets/GET_MISSIONS_SUCCESS';
const REGISTER_MISSIONS = 'spaceTravelers/rockets/REGISTER_MISSIONS';
const CANCEL_MISSIONS = 'spaceTravelers/rockets/CANCEL_MISSIONS';
const API_URL = 'https://api.spacexdata.com/v3/missions';

export const initState = [];

export const getMisstions = () => async (dispatch) => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const missions = [];
      data.forEach((el) => {
        missions.push({
          mission_id: el.mission_id,
          mission_name: el.mission_name,
          description: el.description,
          reserved: false,
        });
      });
      dispatch({
        type: GET_MISSIONS_SUCCESS,
        payload: missions,
      });
    });
};

export const registermissions = (id) => ({
  type: REGISTER_MISSIONS,
  id,
});

export const cancelmission = (id) => ({
  type: CANCEL_MISSIONS,
  id,
});

const MissionReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return action.payload;
    case REGISTER_MISSIONS:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case CANCEL_MISSIONS:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default MissionReducer;
