export const fetchInitialMovies = movies => ({
  type: 'FETCH_INITIAL_MOVIES',
  movies
});

export const userLogin = user => ({
  type: 'USER_LOGIN',
  id: user.id,
  name: user.name
});

export const userSignUp = newUserData => ({
  type: 'USER_SIGN_UP',
  id: newUserData.id
});

export const userSignOut = () => ({
  type: 'USER_SIGN_OUT'
});

export const addFavorite = favorite => ({
  type: 'ADD_FAVORITE',
  favorite
});