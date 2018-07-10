import { fetchInitialMovies } from '../Actions/index';

const fetchInitialMoviesReducer = ( state = [], action ) => {

  switch ( action.type ) {
    case 'FETCH_INITIAL_MOVIES':
      return [...state, action.movies];
    default:
      return state;
  }
};

export default fetchInitialMoviesReducer;