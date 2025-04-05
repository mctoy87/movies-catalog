import {Link, useParams} from 'react-router';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {trpc} from '../../lib/trpc';
import {Layout} from '../../components/Layout';
import {getOrderMovieRoute} from '../../lib/routes';
import {ViewMoviePageProps} from '../../types/pages';
import {Shedule} from '../../components/Schedule';

export const ViewMoviePage = ({openModal}: ViewMoviePageProps) => {
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
      <Layout className="release__container container">
        <h1 className="release__title visually-hidden">Постер фильма</h1>
        <Header onOpenModal={() => openModal('login')} />
        <main className="release__main">
          <article className="release__wrapper">
            <div className="release__poster-wrapper">
              <img
                className="release__img"
                src={data.film.posterUrl}
                alt="Описание фильма"
              />
              <button className="release__trailer-btn">Смотеть трейлер</button>
            </div>
            <div className="release__description-wrapper">
              <h2 className="release__title">
                <Link to={getOrderMovieRoute({movieId: String(movieId)})}>
                  {data.film.nameRu}
                </Link>
              </h2>
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
            <Shedule title={data.film.nameRu} showtimes={data.film.showtimes} />
          </article>
        </main>
        <Footer />
      </Layout>
    </section>
  );
};
