export const postUserFavorites = jest.fn();
export const movieFetch = jest.fn();
export const fetchUserFavorites = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    data: []
  }));
export const deleteUserFavorite = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({status: 'success', message: 'One row was deleted'})
  }));