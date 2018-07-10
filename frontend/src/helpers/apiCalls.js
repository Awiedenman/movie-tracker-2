import { API_KEY } from '../api-key';

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
  const movieData = await fetch(url);
  const response = await movieData.json();

  if (!movieData.ok) {
    throw Error('failed fetch request');
  }

  return response;
};