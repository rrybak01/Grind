import { get, post, put } from "../api";

export const getWorkouts = () => async dispatch => {
    try {
        console.log("2");
        dispatch({ type: 'GET_WORKOUTS' });
        console.log("3");
        const response = await get(`entrenamientos/lista/1`);
        console.log("RESPONSE:");   
        console.log(response);   
        dispatch({ type: 'GET_WORKOUTS_SUCCESS', payload: response });
    } catch (error) {
        console.log("ERROR: " + error);
        dispatch({ type: 'GET_WORKOUTS_FAILURE', error });
    }
  };