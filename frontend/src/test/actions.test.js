import * as actions from '../Actions';
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

    test('should have type of USER_SIGN_OUT', () => {
      const { userSignOut } = actions;

      const mockAction = {
        type: 'USER_SIGN_OUT'
      };
      const result = userSignOut();
      expect(result).toEqual(mockAction);
    });
     
    test('should have a type of CLEAR_USER_FAVORITES', () => {
      const { clearUserFavorites } = actions;

      const mockAction = {
        type: 'CLEAR_USER_FAVORITES'
      };

      const result = clearUserFavorites();

      expect(result).toEqual(mockAction);

    });



    test('should have a type of ADD_FAVORITE', () => {
      const { addFavorite } = actions;
      const movie = { movie: 'Thor'};

      const mockAction = {
        type: 'ADD_FAVORITE',
        favorite: movie
      };

      const result = addFavorite(movie);

      expect(result).toEqual(mockAction);

    });

    test('should have a type of REMOVE_FAVORITE', () => {
      const { removeFavorite } = actions;

      const mockAction = {
        type: 'REMOVE_FAVORITE'
      };

      const result = removeFavorite();

      expect(result).toEqual(mockAction);
    });

    test('should have a type of ADD_EXISTING_FAVORITES', () => {
      const { addExistingFavorites } = actions;
      const mockExistingUserFavorites = [{ title: 'thor'}, {title: 'GI Joe' }];
      const mockAction = {
        type: 'ADD_EXISTING_FAVORITES',
        favorites: mockExistingUserFavorites
      };

      const result = addExistingFavorites(mockExistingUserFavorites);

      expect(result).toEqual(mockAction);
    });

  });
});
