import {Layout} from './Layout';

export const Header = () => (
  <header className="header">
    <Layout>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link">Главная</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link">Поиск</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link">Избранное</a>
          </li>
          <li className="header__nav-item header__nav-login">
            <a className="header__nav-link">Вход</a>
          </li>
        </ul>
      </nav>
    </Layout>
  </header>
);
