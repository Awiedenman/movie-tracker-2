import { API_KEY } from '../api-key';

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw Error('failed fetch request');
  }

  return await response.json();
};