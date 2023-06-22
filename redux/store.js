import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/auth'; // Importa el archivo de los reducers

const rootReducer = combineReducers({
    auth: authReducer,
  });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
