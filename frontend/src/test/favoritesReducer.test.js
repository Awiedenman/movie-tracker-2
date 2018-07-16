import { favoritesReducer } from '../Reducers/favoritesReducer';
import * as actions from '../Actions';

describe('favoritesReducer', () => {
  test('should return a default state of an empty array', () => {
    const expected = [];
    const result = favoritesReducer( undefined, {});

    expect(result).toEqual(expected);
  });

  test('should return a new state', () => {
    const mockUserId = 30;
    const mockFavorite = {
      movie_id: 11111,
      title: 'Thor',
      poster_path: 'thor.png',
      release_date: 202020202,
      vote_average: 7.5,
      overview: 'what a movie!'
    };
    

    const result = favoritesReducer([], actions.addFavorite(mockFavorite, mockUserId));
    const expected =  [ 
      { 
        favorite: {
          movie_id: 11111,
          title: 'Thor',
          poster_path: 'thor.png',
          release_date: 202020202,
          vote_average: 7.5,
          overview: 'what a movie!'
        },
        userId: 30 
      } 
    ];

    expect(result).toEqual(expected);
    

  });
});
