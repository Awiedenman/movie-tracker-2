const fetchInitialMoviesReducer = (state = [], action) => {
  switch ( action.type ) {
    case 'FETCH_INITIAL_MOVIES':
      return [...action.movies];
    default:
      return state;
  }
};

export default fetchInitialMoviesReducer;