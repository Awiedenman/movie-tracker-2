import { favoritesReducer } from '../Reducers/favoritesReducer';
import * as actions from '../Actions';

describe('favoritesReducer', () => {
  test('should return a default state of an empty array', () => {
    const expected = [];
    const result = favoritesReducer( undefined, {});

    expect(result).toEqual(expected);
  });

  test('should return a new state when a favorite is added', () => {
    const mockFavorite = {
      movie_id: 11111,
      title: 'Thor',
      poster_path: 'thor.png',
      release_date: 202020202,
      vote_average: 7.5,
      overview: 'what a movie!'
    };


    const result = favoritesReducer([], actions.addFavorite(mockFavorite));
    const expected =  [
      {
        movie_id: 11111,
        title: 'Thor',
        poster_path: 'thor.png',
        release_date: 202020202,
        vote_average: 7.5,
        overview: 'what a movie!'
      }
    ];
    expect(result).toEqual(expected);
  });

  test('should remove a favorite when REMOVE_FAVORITE ', () => {
    const mockState = [{id: 1}, {id: 2 }];
    const mockMovie = {id: 1};
    const expected = [{id: 2 }];
    const result = favoritesReducer(mockState, actions.removeFavorite(mockMovie));
    expect(result).toEqual(expected);
  });


  test('should clear out the users favorites from the store when they have logged out', () => {
    const result = favoritesReducer([{title: 'Thor'}, {title: 'Batman'}], actions.clearUserFavorites());

    expect(result).toEqual([]);
  });
  test('should populate existing user favorites on login', () => {
    const mockFavorites = [{title: 'Batman'}, {title: 'Superman' }, {title: 'Howard the Duck' }];
    const expected = [{title: 'Batman'}, {title: 'Superman' }, {title: 'Howard the Duck' }];

    const result = favoritesReducer([], actions.addExistingFavorites(mockFavorites));

    expect(result).toEqual(expected);
  });
});
