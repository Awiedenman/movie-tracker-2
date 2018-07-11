import fetchInitialMoviesReducer from '../Reducers/fetchInitialMoviesReducer';
import * as actions from '../Actions/index';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('fetchInitialMoviesReducer', () => {
  test('should have an initial/ default state of an empty array', () => {
    const expected = [];
    const result = fetchInitialMoviesReducer(undefined, []);

    expect( result ).toEqual(expected);
  });

  test('should return a state of movies when case is FETCH_INITIAL_MOVIES', () => {
    const expected = mockCleanedMovieList;

    const result = fetchInitialMoviesReducer(undefined, actions.fetchInitialMovies(mockCleanedMovieList));

    expect(result).toEqual(expected);
  });
});