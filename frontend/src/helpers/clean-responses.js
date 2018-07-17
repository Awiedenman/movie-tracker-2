export const cleanMovieResponse = response => response.items.map(item => ({
  average: item.vote_average,
  id: item.id,
  title: item.title,
  image: item.poster_path,
  releaseDate: item.release_date,
  overview: item.overview
}));

export const cleanFavoritesResponse = response => response.data.map(favorite => ({
  average: Number(favorite.vote_average),
  id: favorite.movie_id,
  title: favorite.title,
  image: favorite.poster_path,
  releaseDate: favorite.release_date,
  overview: favorite.overview
}));