const getRouteParams = <T extends Record<string, boolean>>(object: T) =>
  Object.keys(object).reduce(
    (acc, key) => ({...acc, [key]: `:${key}`}),
    {}
  ) as Record<keyof T, string>;

export const getAllMoviesRoute = () => '/';

export const viewMovieRouteParams = getRouteParams({movieId: true});
export type ViewMovieRouteParams = typeof viewMovieRouteParams;
export const getViewMovieRote = ({movieId}: ViewMovieRouteParams) =>
  `/movie/${movieId}`;

export const getOrderMovieRoute = ({movieId}: ViewMovieRouteParams) =>
  `/movie/${movieId}/order`;
