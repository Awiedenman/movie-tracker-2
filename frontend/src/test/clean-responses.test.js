import * as fetchRequests from '../helpers/clean-responses';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('HELPERS', () => {
  test('should return a cleaned movie list', () => {
    const { cleanInitialMovieRequest } = fetchRequests;
    const cleanedMovieList = cleanInitialMovieRequest(mockInitialMovieResponse);

    expect(cleanedMovieList).toEqual(mockCleanedMovieList);
  });
});
