// Этот модуль будет отвечать за создание элементов DOM.

import { formatFilmDuration } from "./service.js";

// получаем DOM элементы
export const movieList = document.querySelector('.movies__list');
export const loader = document.querySelector('.movies__loader-wrapper');
export const btnShowMore = document.querySelector('.movies__show-more');
export const heroPosterElement = document.querySelector('.hero__poster');

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
* Функция для обновления содержимого .hero
* @param {Object} film - Объект фильма.
*/
export const updateHero = (film) => {
  const heroTitle = document.querySelector('.hero__title');
  const heroImage = document.querySelector('.hero__img');
  const heroYear = document.querySelector('.hero__year');
  const heroRating = document.querySelector('.hero__rating');
  const heroDuration = document.querySelector('.hero__duration');
  const heroCountry = document.querySelector('.hero__country');
  const heroDescription = document.querySelector('.hero__description');

 // Обновляем содержимое .hero данными из карточки
  heroTitle.textContent = film.nameRu;
  heroImage.setAttribute('src', film.posterUrl);
  heroYear.textContent = `Год: ${film.year}`;
  heroRating.textContent = `Рейтинг: ${film.ratingKinopoisk}`;
  heroDuration.textContent = `Продолжительность: ${film.duration}`;
  // heroCountry.textContent = `Страна: ${film.country}`;
  heroDescription.textContent = film.description;
};

// отобразить детали фильма на странице
export const renderFilmDetails = (film) => {
  const heroTitle = document.querySelector('.hero__title');
  const heroImage = document.querySelector('.hero__img');
  const heroYear = document.querySelector('.hero__year');
  const heroRating = document.querySelector('.hero__rating');
  const heroDuration = document.querySelector('.hero__duration');
  const heroCountry = document.querySelector('.hero__country');
  const heroDescription = document.querySelector('.hero__description');

 // Обновляем содержимое .hero данными из карточки
  heroTitle.textContent = film.nameRu;
  heroImage.setAttribute('src', film.posterUrl);
  heroYear.textContent = `Год: ${film.year}`;
  heroRating.textContent = `Рейтинг: ${film.ratingKinopoisk}`;
  heroDuration.textContent = `Продолжительность: ${formatFilmDuration(film.filmLength)}`;

  if (!film.countries.length) heroCountry.remove(); //удаляем страну если нет в данных с сервера
  if (film.countries.length > 0) {
    let countryNames = ''; //имена стран где снимали фильм
    // Если массив содержит только один элемент
    if(film.countries.length === 1) {
      countryNames = film.countries[0].country; // Извлекаем название страны
    } else {
      countryNames = film.countries.map(country => country.country).join(', ');
    }
    heroCountry.textContent = `Страна: ${countryNames}`;
  }
  heroDescription.textContent = film.description;
};