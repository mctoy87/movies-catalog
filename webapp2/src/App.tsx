import {BrowserRouter, Route, Routes} from 'react-router';
import './css/main.css';
import {TrpcProvider} from './lib/trpc';
import {AllMoviesPage} from './pages/AllMoviesPage';
import {ViewMoviePage} from './pages/ViewMoviePage';
import {getAllMoviesRoute, getViewMovieRote} from './lib/routes';

export const App = () => (
  <TrpcProvider>
    <BrowserRouter>
      <Routes>
        <Route path={getAllMoviesRoute()} element={<AllMoviesPage />} />
        <Route
          path={getViewMovieRote({movieId: ':movieId'})}
          element={<ViewMoviePage />}
        />
      </Routes>
    </BrowserRouter>
  </TrpcProvider>
);
