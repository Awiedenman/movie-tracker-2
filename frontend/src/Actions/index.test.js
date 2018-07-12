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


      const mockUser = {
        id: 1,
        name: "Taylor",
        password: "password",
        email: "tman2272@aol.com"
      };

      const mockAction = {
        type: "USER_LOGIN",
        id: 1,
        name: "Taylor"
      };

      const result = userLogin(mockUser);
      expect(result).toEqual(mockAction);
    });

    test('should have type of USER_SIGN_UP', () => {
      const { userSignUp } = actions;
      const name = 'Austin';
      const email = 'austin@aol.com';
      const password = 'password';
      const id = 34;

      const mockAction = {
        type: 'USER_SIGN_UP',
        id 
      };

      const mockUser = {
        name,
        email,
        password,
        id
      };

      const result = userSignUp(mockUser);

      expect(result).toEqual(mockAction);
    });
  });
});
