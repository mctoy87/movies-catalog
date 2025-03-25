import {Route, Routes} from 'react-router';
import {useModal} from './hooks/useModal';
import {AllMoviesPage} from './pages/AllMoviesPage';
import {ViewMoviePage} from './pages/ViewMoviePage';
import {Modal} from './components/Modal';
import * as routes from './lib/routes';
import {OrderMoviePage} from './pages/OrderMoviePage';

export const AppContent = () => {
  const {isModalOpen, formType, openModal, closeModal} = useModal();

  return (
    <>
      <Routes>
        <Route path="/" element={<AllMoviesPage openModal={openModal} />} />
        <Route
          path="/movie/:movieId"
          element={<ViewMoviePage openModal={openModal} />}
        />
        <Route
          path={routes.getOrderMovieRoute(routes.viewMovieRouteParams)}
          element={<OrderMoviePage />}
        />
      </Routes>

      {isModalOpen && (
        <Modal
          formType={formType}
          onClose={closeModal}
          onFormChange={(type) => openModal(type)}
        />
      )}
    </>
  );
};
