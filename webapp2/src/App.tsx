import {BrowserRouter, Route, Routes} from 'react-router';
import './css/main.css';
import {TrpcProvider} from './lib/trpc';
import {AllMoviesPage} from './pages/AllMoviesPage';
import {ViewMoviePage} from './pages/ViewMoviePage';
import * as routes from './lib/routes';
import {OrderMoviePage} from './pages/OrderMoviePage';

export const App = () => (
  <TrpcProvider>
    <BrowserRouter>
      <Routes>
        <Route path={routes.getAllMoviesRoute()} element={<AllMoviesPage />} />
        <Route
          path={routes.getViewMovieRote(routes.viewMovieRouteParams)}
          element={<ViewMoviePage />}
        />
        <Route
          path={routes.getOrderMovieRoute(routes.viewMovieRouteParams)}
          element={<OrderMoviePage />}
        />
      </Routes>
    </BrowserRouter>
  </TrpcProvider>
);
