import * as fetchRequests from '../helpers/clean-responses';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('HELPERS', () => {
  test('should return a cleaned movie list', () => {
    const { cleanMovieResponse } = fetchRequests;
    const cleanedMovieList = cleanMovieResponse(mockInitialMovieResponse);

    expect(cleanedMovieList).toEqual(mockCleanedMovieList);
  });

  test('should return a cleanedFavorite move', () => {
    const { cleanFavoritesResponse } = fetchRequests;
    const mockResponse = {
      data: [{
        movie_id: 1,
        title: 'thor',
        poster_path: 'some-thing',
        release_date: 'date here',
        overview: 'some overview',
        vote_average: 2.22
      }]
    };
    const expected = [{
      id: 1, title: 'thor',
      releaseDate: 'date here',
      overview: 'some overview',
      image:'some-thing',
      average: 2.22
    }];
    const result = cleanFavoritesResponse(mockResponse);

    expect(result).toEqual(expected);
  });
});
