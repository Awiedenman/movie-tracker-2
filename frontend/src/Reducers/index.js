import { combineReducers } from 'redux';
import fetchInitialMoviesReducer from './fetchInitialMoviesReducer';
import userReducer from './userReducer';

export default combineReducers({
  initialMovies: fetchInitialMoviesReducer,
  userInfo: userReducer
});