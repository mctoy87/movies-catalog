export const getAllMoviesRoute = () => '/';

export const getViewMovieRote = ({movieId}: {movieId: string}) =>
  `/movie/${movieId}`;
