import { closeBtn, posterElement, movieList, catalogContainer, movies } from "./dom.js"
import { getFilmDetails, handlePosterClose } from "./film.js";

export const setupEventListeners = () => {
  //закрывает постер по крестику
  // closeBtn.addEventListener('click', handlePosterClose);

  //открывает постер по клиу на карточку фильма
  movieList.addEventListener('click', (event) => {
    const target = event.target.closest('.card');
    if (target) {
      //получает id из карточки 
      const filmId = Number(target.dataset.id);
      // открывает стилями постер фильма
      if (posterElement.style.display === 'none') {
        movies.style.maxWidth = '65%';
        posterElement.style.display = 'block';
      };
      //получает детали фильма с API и наполняет постер 
      getFilmDetails(filmId);
    }
  });

}