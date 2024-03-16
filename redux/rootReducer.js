import { combineReducers } from 'redux';
import authReducer from './reducers/auth';
import workoutsReducer from './reducers/workouts';

const rootReducer = combineReducers({
  auth: authReducer,
  workouts: workoutsReducer,
});

export default rootReducer;