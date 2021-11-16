const GET_MISSIONS_SUCCESS = 'spaceTravelers/rockets/GET_MISSIONS_SUCCESS';
const REGISTER_MISSIONS = 'spaceTravelers/rockets/REGISTER_MISSIONS';
const CANCEL_MISSIONS = 'spaceTravelers/rockets/CANCEL_MISSIONS';

const initState = [];

const getMisstions = async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = response.json();
  const missoinslist = [];

  missions.forEach((mission) => {
    const missionsDetails = {
      mission_id: mission.id,
      mission_name: mission.name,
      description: mission.description,
    };
    missoinslist.push(missionsDetails);
  });

  dispatch({
    type: GET_MISSIONS_SUCCESS,
    payload: missoinslist,
  });
};

const registermissions = (id) => ({
  type: REGISTER_MISSIONS,
  id,
});

const cancelmission = (id) => ({
  type: CANCEL_MISSIONS,
  id,
});
