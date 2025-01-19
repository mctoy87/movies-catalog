import {useParams} from 'react-router';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {Modal} from '../../components/Modal';
import {trpc} from '../../lib/trpc';

export const ViewMoviePage = () => {
  const {movieId} = useParams() as {movieId: string};

  const {data, error, isLoading, isFetching, isError} = trpc.getFilm.useQuery({
    filmId: movieId,
  });

  if (isLoading || isFetching) {
    return (
      <div>
        <p>Идет загрузка...</p>
      </div>
    );
  }

  if (isError) {
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  if (!data || !data.film) {
    return <div>`Movie with id = {movieId} not found`</div>;
  }

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
              <h2 className="release__title">{data.film.nameRu}</h2>
              <p className="release__country">
                Страна: {data.film.countriesText}
              </p>
              <p className="release__duration">
                Продожительность: {data.film.length}
              </p>
              <p className="release__genre">
                Жанр: {[...data.film.genres].join(', ')}
              </p>
              <p className="release__rating">Рейтинг: {data.film.rating}</p>
              <p className="release__year">Год: {data.film.year}</p>
              <p className="release__description">
                Описание фильма: {data.film.description}
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
