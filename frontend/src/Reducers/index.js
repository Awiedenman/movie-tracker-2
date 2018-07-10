import { combineReducers } from 'redux';
import { fetchInitialMoviesReducer } from './fetchInitialMoviesReducer';

export default combineReducers({
  initialMovies: fetchInitialMoviesReducer
});