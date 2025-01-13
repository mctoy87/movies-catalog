// src/components/Catalog.tsx

import {trpc} from '../lib/trpc';

export const Catalog = () => {
  const {data, error, isLoading, isFetching, isError} = trpc.getfilms.useQuery();

  if (isLoading || isFetching) {
    return (
      <div>
        <p>Идет загрузка...</p>
      </div>
      // Это первоначальное подключение загрузчика
      /* <div className="catalog__movies-loader-wrapper movies__loader-wrapper">
        <div className="lds-roller">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
      */
    );
  }

  if (isError) {
    return <div>Ошибка загрузки: {error.message}</div>;
  }

  return (
    <section className="catalog">
      <div className="container catalog__container">
        <h2 className="catalog__title visually-hidden">Все фильмы</h2>
        <div className="catalog__film-container movies">
          <h3 className="catalog__movies-title movies__title">Каталог фильмов</h3>
          {data && data.films.length > 0 ? (
              <ul className="catalog__movies-list movies__list">
                {/* Пример элемента фильма */}
                {data.films.map(film => ( // Добавлено return
                  <li key={film.id} className="movies__item card">
                    <img src="./img/cover.webp" alt={film.nameRu} className="card__img" />
                    <h4 className="card__title">{film.nameRu}</h4>
                    <p className="card__release-date">{film.year}</p>
                    <p className="card__rate">Рейтинг: {film.rating}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div>Нет доступных фильмов</div>
            )}


          <button className="catalog__movies-show-more movies__show-more" type="button" aria-label="Открыть следующие 20 фильмов">
            Следующие 20 фильмов
          </button>
        </div>
      </div>
    </section>
  );
};
