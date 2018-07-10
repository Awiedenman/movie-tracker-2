import { fetchInitialMoviesReducer } from '../Actions/index';

export const fetchInitialMoviesReducer = ( state = [], action ) => {

  switch ( action.type ) {
    case 'fetchInitialMoviesReducer':
      return [...state, fetchInitialMoviesReducer];
    default:
      return state;
  }
};