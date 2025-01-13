import {Header} from '../../components/Header';
import {Catalog} from '../../components/Catalog';
import {Footer} from '../../components/Footer';
import {Modal} from '../../components/Modal';

export const AllMoviesPage = () => (
  <div>
    <Header />
    <main>
      <Catalog />
    </main>
    <Footer />
    <Modal />
  </div>
);
