import { API_KEY } from '../api-key';

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw Error('failed fetch request');
  }

  return await response.json();
};

export const userLoginRequest = async (email, password) => {
  const response = await fetch('http://localhost:3000/api/users',  {
    method: 'POST',
    body: JSON.stringify({ email,  password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw Error('Email and Password do not match');
  }

  return await response.json();
};

export const userSignUpRequest = async (name, email, password) =>  {
  const response = await fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw Error('Sorry, email has already been used');
  }

  return await response.json();
};

export const postUserFavorites = async (movie, userId) => {
  const { id, title, image, releaseDate, overview, average } = movie;

  const favoriteToPost = {
    movie_id: id,
    user_id: userId,
    title: title,
    poster_path: image,
    release_date: releaseDate,
    vote_average: average,
    overview: overview
  };

  const response = await fetch('http://localhost:3000/api/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify(favoriteToPost),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw Error('Sorry, there was problem saving you favorite. Please try again later.');
  }

  return response.json();
};

export const fetchUserFavorites = async userId => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}/favorites`);

  if (!response.ok) {
    throw Error('Sorry, we could not retrieve you favorites at this time');
  }

  return await response.json();
};

export const deleteUserfavorite = async (movieId, userId) => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}/favorites/${movieId}`, {
    method: 'POST',
    body: JSON.stringify(userId, movieId),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw Error('Sorry, we could not remove you favorite at this time.')
  }
  return await response.json();

};