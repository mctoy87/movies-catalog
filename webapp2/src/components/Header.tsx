import {Link} from 'react-router';
import {Layout} from './Layout';
import {getAllMoviesRoute} from '../lib/routes';

type HeaderProps = {
  onOpenModal: () => void;
};

export const Header = ({onOpenModal}: HeaderProps) => (
  <header className="header">
    <Layout>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to={getAllMoviesRoute()} className="header__nav-link">
              Главная
            </Link>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link">Поиск</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link">Избранное</a>
          </li>
          <li className="header__nav-item header__nav-login">
            <a onClick={onOpenModal} className="header__nav-link">
              Вход
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  </header>
);
