import * as actions from './index';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';


describe('Actions', () => {
  test('should have type of FETCH_INITIAL_MOVIES', () => {
    const { fetchInitialMovies } = actions;
    const movies = mockCleanedMovieList;
    const expected = {
      type: 'FETCH_INITIAL_MOVIES',
      movies
    };

    const result = fetchInitialMovies(movies);

    expect(result).toEqual(expected);
  });

  describe('USER actions', () => {
    test('should have type of USER_LOGIN', () => {
      const { userLogin } = actions;
      const email = 'some@aol.com';
      const password = 'password';

      const mockAction = {
        type: 'USER_LOGIN',
        email,
        password
      };

      const result = userLogin(email, password);
      expect(result).toEqual(mockAction);
    });

  });


});
