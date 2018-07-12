export const fetchInitialMovies = movies => ({
  type: 'FETCH_INITIAL_MOVIES',
  movies
});

export const userLogin = user => ({
  type: 'USER_LOGIN',
  user
});

export const userSignUp = (name, email, password) => ({
  type: 'USER_SIGN_UP',
  name,
  email,
  password
});