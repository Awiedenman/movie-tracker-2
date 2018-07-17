export const postUserFavorites = jest.fn();
export const movieFetch = jest.fn();
export const fetchUserFavorites = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    data: []
  }));