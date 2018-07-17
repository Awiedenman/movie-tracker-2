import { favoritesReducer } from '../Reducers/favoritesReducer';
import * as actions from '../Actions';

describe('favoritesReducer', () => {
  test('should return a default state of an empty array', () => {
    const expected = [];
    const result = favoritesReducer( undefined, {});

    expect(result).toEqual(expected);
  });

  test('should return a new state when a favorite is added', () => {
    // const mockUserId = 30;
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

  test('should clear out the users favorites from the store when they have logged out', () => {
     const result = favoritesReducer([{title: 'Thor'}, {title: 'Batman'}], actions.clearUserFavorites());

     expect(result).toEqual([]);
  });
});
