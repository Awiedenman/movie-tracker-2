export const cleanInitialMovieRequest = response => {
  const { items } = response;
  return {
    movieList: items
  };
};