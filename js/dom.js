// Этот модуль будет отвечать за создание элементов DOM.
export const createRatingElement = (rate) => {
  if (!rate) return null;

  const rating = document.createElement('p');
  rating.classList.add('card__rate');
  rating.textContent = `Рейтинг: ${rate}`;
  return rating;
};

export const createFilmCard = (film) => {
  const li = document.createElement('li');
  li.classList.add('movies__item', 'card');

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