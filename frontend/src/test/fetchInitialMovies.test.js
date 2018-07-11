import fetchInitialMoviesReducer from '../Reducers/fetchInitialMoviesReducer';
import * as actions from '../Actions/index';
// import { mock-clean-data } from '../mock-data/mock-clean-data';

describe('fetchInitialMoviesReducer', () => {
  test('should have an initial/ default state of an empty array', () => {
    const expected = [];
    const result = fetchInitialMoviesReducer(undefined, []);

    expect( result ).toEqual(expected);

  });

  test('should return a state of movies when case is FETCH_INITIAL_MOVIES', () => {
    const movies = {
      id: 284053,
      media_type: "movie"
    };
    const expected =[
      movies
    ];

    const result = fetchInitialMoviesReducer(undefined, actions.fetchInitialMovies(movies));

    expect(result).toEqual(expected);
  });
});