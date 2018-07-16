import { favoritesReducer } from '../Reducers/favoritesReducer';

describe('favoritesReducer', () => {
  test('should return a default state of an empty array', () => {
    const expected = [];
    const result = favoritesReducer( undefined, {});

    expect(result).toEqual(expected);
  })
});