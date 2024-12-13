// Этот модуль будет отвечать за рендеринг фильмов.
import { createFilmCard } from './dom.js';

const movieList = document.querySelector('.movies__list');

export const renderFilms = (films) => {
  films.forEach(film => {
    const filmCard = createFilmCard(film);
    movieList.append(filmCard);
  });
};