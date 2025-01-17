import {BrowserRouter, Route, Routes} from 'react-router';
import './css/main.css';
import {TrpcProvider} from './lib/trpc';
import {AllMoviesPage} from './pages/AllMoviesPage';
import {ViewMoviePage} from './pages/ViewMoviePage';
import {
  getAllMoviesRoute,
  getViewMovieRote,
  viewMovieRouteParams,
} from './lib/routes';

export const App = () => (
  <TrpcProvider>
    <BrowserRouter>
      <Routes>
        <Route path={getAllMoviesRoute()} element={<AllMoviesPage />} />
        <Route
          path={getViewMovieRote(viewMovieRouteParams)}
          element={<ViewMoviePage />}
        />
      </Routes>
    </BrowserRouter>
  </TrpcProvider>
);
