const initialState = {
  logged: false,
  loading: false,
  me: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, loading: true};
    case 'GET_USER_SUCCESS':
      return { ...state, logged: true, me: action.payload, loading: false };
    case 'GET_USER_FAILURE':
      return { ...state, logged: false, loading: false };
    default:
      return state;
  }
};



export default authReducer;
