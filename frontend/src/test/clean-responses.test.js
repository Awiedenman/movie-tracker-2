import * as fetchRequests from '../helpers/clean-responses';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('HELPERS', () => {
  test('should return a cleaned movie list', () => {
    const { cleanMovieResponse } = fetchRequests;
    const cleanedMovieList = cleanMovieResponse(mockInitialMovieResponse);

    expect(cleanedMovieList).toEqual(mockCleanedMovieList);
  });
});
