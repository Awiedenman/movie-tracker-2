export const fetchInitialMovies = movies => ({
  type: 'FETCH_INITIAL_MOVIES',
  movies
});

export const userLogin = (email, password) => ({
  type: 'USER_LOGIN',
  email,
  password
});