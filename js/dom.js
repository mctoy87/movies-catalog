// Этот модуль будет отвечать за создание элементов DOM.

import { handlePosterClose } from "./film.js";
import { formatDuration } from "./service.js";

// получаем DOM элементы
export const movieList = document.querySelector('.movies__list');
export const loader = document.querySelector('.movies__loader-wrapper');
export const posterLoader = document.querySelector('.hero__loader-wrapper');
export const btnShowMore = document.querySelector('.movies__show-more');
export const posterElement = document.querySelector('.hero');
export const catalogContainer = document.querySelector('.catalog__container');
export const movies = document.querySelector('.movies');
export const closeBtn = document.querySelector('.hero__close');

/**
 * Создает элемент рейтинга фильма.
 * @param {number} rate - Рейтинг фильма.
 * @returns {HTMLElement|null} - Элемент рейтинга или null.
 */
export const createRatingElement = (rate) => {
  if (!rate) return null;

  const rating = document.createElement('p');
  rating.classList.add('card__rate');
  rating.textContent = `Рейтинг: ${rate}`;
  return rating;
};


/**
 * Создает текстовый контент фильма.
 * @param {Object} film - Объект фильма.
 * @returns {textContent|null} - Элемент текстовый или null.
 */
const getFilmCountries = (film) => {
  if (!film.countries || film.countries.length === 0) return null;

  // Получаем названия стран и объединяем их в строку
  const countryNames = film.countries.map(country => country.country).join(', ');

  // Возвращаем строку с названиями стран
  return `Страна: ${countryNames}`;
};

/**
 * Создает карточку фильма.
 * @param {Object} film - Объект фильма.
 * @returns {HTMLElement} - Элемент карточки фильма.
 */
export const createFilmCard = (film) => {
  const li = document.createElement('li');
  li.classList.add('movies__item', 'card');
  li.setAttribute('data-id', film.kinopoiskId);

  const image = document.createElement('img');
  image.classList.add('card__img');
  image.setAttribute('src', film.posterUrl);
  image.setAttribute('alt', `Постер кинофильма "${film.nameRu || ''}"`);

  const title = document.createElement('h4');
  title.classList.add('card__title');
  title.textContent = film.nameRu;

  const releaseDate = document.createElement('p');
  releaseDate.classList.add('card__release-date');
  releaseDate.textContent = film.year;

  const ratingElement = createRatingElement(film.ratingKinopoisk);

  li.append(image, title, releaseDate);
  if (ratingElement) li.append(ratingElement);

  return li;
};

/**
 * Отображает детали фильма на странице.
 * @param {Object} film - Объект фильма.
 */

export const renderFilmDetails = (film) => {
   // Получаем текст стран
  const countriesText = getFilmCountries(film);

  // вставляем всю разметку
  posterElement.insertAdjacentHTML('afterbegin', `
    <p class="hero__title">${film.nameRu}</p>
    <div class="hero__img-wrapper">
      <img src=${film.posterUrl} alt="Описание фильма '${film.nameRu}'" class="hero__img">
    </div>
    <div class="hero__description-wrapper">
      <p class="hero__year">Год: ${film.year}</p>
      <p class="hero__rating">Рейтинг: ${film.ratingKinopoisk}</p>
      <p class="hero__duration">Продолжительность: ${formatDuration(film.filmLength)}</p>
      ${countriesText ? `<p class="hero__country">${countriesText}</p>` : ''}
      <p class="hero__description">${film.description}</p>
    </div>
    `);
    // создаем кнопку для закрытия постера
    const btnClose = document.createElement('button');
    btnClose.setAttribute('type', 'button');
    btnClose.classList.add('hero__close');
    btnClose.insertAdjacentHTML("beforeend", `
      <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
        <polygon fill="#fff" points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161
        11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 " />
      </svg>`);
    //слушатель на закрытие постера
    btnClose.onclick = handlePosterClose;

    posterElement.append(btnClose);
};