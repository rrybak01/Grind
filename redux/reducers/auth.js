import { combineReducers } from 'redux';

const initialState = {
    count: 0
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default combineReducers({
    auth: authReducer
  });