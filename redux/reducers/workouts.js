const initialState = {
  loading: false,
  workouts: [],
};
  
function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_WORKOUTS':
      return { ...state, loading: true};
    case 'GET_WORKOUTS_SUCCESS':
      return { ...state, workouts: action.payload, loading: false };
    case 'GET_WORKOUTS_FAILURE':
      return { ...state, workouts: [], loading: false };
    default:
      return state;
  }
};
  
export default workoutsReducer;
  