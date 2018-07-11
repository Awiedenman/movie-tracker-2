export const cleanMovieResponse = response => response.items.map(item => ({
  average: item.vote_average,
  id: item.id,
  title: item.title,
  image: item.poster_path,
  overview: item.overview
}));
