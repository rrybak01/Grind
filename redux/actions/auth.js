import { get, post, put } from "../api";

export const getUser = () => async dispatch => {
    try {
        dispatch({ type: 'GET_USER' });
        const response = await get(`usuarios/1`);
        dispatch({ type: 'GET_USER_SUCCESS', payload: response });
    } catch (error) {
        console.log("ERROR: " + error);
        dispatch({ type: 'GET_USER_FAILURE', error });
    }
  };