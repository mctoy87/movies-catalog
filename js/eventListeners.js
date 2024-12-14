import { movieList } from "./dom.js"
import { getFilmDetails } from "./film.js";

export const setupEventListeners = () => {
  movieList.addEventListener('click', (event) => {
    const target = event.target.closest('.card');
    if (target) {
      console.log('Кликнули на фильм:', target);
      // считываем id фильма
      const filmId = Number(target.dataset.id);
      console.log('ID фильма:', filmId);

      getFilmDetails(filmId);
    }
  });
}