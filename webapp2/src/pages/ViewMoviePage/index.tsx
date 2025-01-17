import {useParams} from 'react-router';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {Modal} from '../../components/Modal';

export const ViewMoviePage = () => {
  const {movieId} = useParams() as {movieId: string};
  return (
    <section className="release">
      <div className="container release__container">
        <h1 className="release__title visually-hidden"></h1>
        <Header />
        <main className="release_main">
          <article className="release__wrapper">
            <div className="release__poster-wrapper">
              <img
                className="release__img"
                src="/img/cover.webp"
                alt="Описание фильма"
              />
              <button className="release_trailer-btn">Смотеть трейлер</button>
            </div>
            <div className="release__description-wrapper">
              <h2 className="release__title">{movieId}</h2>
              <p className="release__country">Страна: США</p>
              <p className="release__duration">Продожительность: 3 ч. 1 мин.</p>
              <p className="release__genre">приключение, фантастика</p>
              <p className="release__rating">Рейтинг: 2018</p>
              <p className="release__year">Год: 2018</p>
              <p className="release__description">
                Земля, пережившая войну с&nbsp;инопланетными захватчиками,
                опустела; остатки человечества готовятся покинуть непригодную
                для жизни планету. Главный герой&nbsp;&mdash; техник
                по&nbsp;обслуживанию дронов&nbsp;&mdash; находит разбившийся
                корабль NASA, команда которого погибает у&nbsp;него
                на&nbsp;глазах. Ему удаётся спасти лишь одну
                женщину&nbsp;&mdash; и&nbsp;вскоре он&nbsp;понимает, что это
                перевернёт его жизнь.
              </p>
            </div>
          </article>
        </main>
        <Footer />
        <Modal />
      </div>
    </section>
  );
};
