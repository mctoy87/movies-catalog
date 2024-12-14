// Этот модуль будет отвечать за рендеринг фильмов.
import { fetchData, URL_API } from './api.js';
import { createFilmCard, renderFilmDetails } from './dom.js';
import { movieList } from './dom.js';

export const renderFilms = (films) => {
  films.forEach(film => {
    const filmCard = createFilmCard(film);
    movieList.append(filmCard);
  });
};

//получить детали фильма
export const getFilmDetails = async (filmId) => {
  
  const dataFilm = await fetchData(URL_API + filmId);

  renderFilmDetails(dataFilm);
};

