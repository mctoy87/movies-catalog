// Этот модуль будет отвечать за рендеринг фильмов.
import { fetchData, URL_API } from './api.js';
import { createFilmCard, movies, posterElement, posterLoader, renderFilmDetails } from './dom.js';
import { movieList } from './dom.js';

export const renderFilms = (films) => {
  films.forEach(film => {
    const filmCard = createFilmCard(film);
    movieList.append(filmCard);
  });
};

//получить детали фильма
export const getFilmDetails = async (filmId) => {
  // получаем и очищаем постер 
  posterElement.innerHTML = '';

  // создаем preloader и вставляем в постер
  const loader = document.createElement('div');
  loader.classList.add('hero__loader-wrapper');
  loader.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
  posterElement.append(loader);
  
  // получаем данные постера с API
  const dataFilm = await fetchData(URL_API + filmId);

  // отобразить детали фильма на странице
  renderFilmDetails(dataFilm);
};

// Функция для обработки клика на кнопке закрытия постера фильма
export const handlePosterClose = (event) => {
  const target = event.target;
  if (target.closest('.hero__close')) {
      // Удаляем элемент постера
      posterElement.style.display = 'none';
      movies.style.maxWidth = 'none';
  }
}

