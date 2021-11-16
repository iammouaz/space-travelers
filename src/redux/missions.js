const GET_MISSIONS_SUCCESS = 'spaceTravelers/rockets/GET_MISSIONS_SUCCESS';
const REGISTER_MISSIONS = 'spaceTravelers/rockets/REGISTER_MISSIONS';
const CANCEL_MISSIONS = 'spaceTravelers/rockets/CANCEL_MISSIONS';

export const initState = [];

export const getMisstions = async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = response.json();
  const missoinslist = [];

  missions.forEach((mission) => {
    const missionsDetails = {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    };
    missoinslist.push(missionsDetails);
  });

  dispatch({
    type: GET_MISSIONS_SUCCESS,
    payload: missoinslist,
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
      return [...action.payload];
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
