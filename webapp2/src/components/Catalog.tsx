// src/components/Catalog.tsx
import React from 'react';

interface Film {
  id: number;
  nameRu: string;
  year: number;
  length: number;
  rating: number;
}

interface CatalogProps {
  films: Film[];
}

export const Catalog: React.FC<CatalogProps> = ({films}) => {
  return (
    <section className="catalog">
      <div className="container catalog__container">
        <h2 className="catalog__title visually-hidden">Все фильмы</h2>
        <div className="catalog__film-container movies">
          <h3 className="catalog__movies-title movies__title">Каталог фильмов</h3>
            {films.length > 0 ? (
              <ul className="catalog__movies-list movies__list">
                {/* Пример элемента фильма */}
                {films.map(film => {
                  return ( // Добавлено return
                    <li key={film.id} className="movies__item card">
                      <img src="./img/cover.webp" alt={film.nameRu} className="card__img" />
                      <h4 className="card__title">{film.nameRu}</h4>
                      <p className="card__release-date">{film.year}</p>
                      <p className="card__rate">Рейтинг: {film.rating}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div>Нет доступных фильмов</div>
            )}

          <div className="catalog__movies-loader-wrapper movies__loader-wrapper">
            <div className="lds-roller">
              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </div>
          </div>

          <button className="catalog__movies-show-more movies__show-more" type="button" aria-label="Открыть следующие 20 фильмов">
            Следующие 20 фильмов
          </button>
        </div>
      </div>
    </section>
  );
};