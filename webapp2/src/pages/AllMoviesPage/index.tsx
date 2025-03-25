import {Header} from '../../components/Header';
import {Catalog} from '../../components/Catalog';
import {Footer} from '../../components/Footer';
import {AllMoviesPageProps} from '../../types/pages';

export const AllMoviesPage = ({openModal}: AllMoviesPageProps) => (
  <div>
    <Header onOpenModal={() => openModal('login')} />
    <main>
      <Catalog />
    </main>
    <Footer />
  </div>
);
