import { combineReducers } from 'redux';
import fetchInitialMoviesReducer from './fetchInitialMoviesReducer';
import userReducer from './userReducer';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
  initialMovies: fetchInitialMoviesReducer,
  userInfo: userReducer
  // favorites: favoritesReducer
});