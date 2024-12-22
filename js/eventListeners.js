import { closeBtn, posterElement, movieList, catalogContainer, movies } from "./dom.js"
import { getFilmDetails, handlePosterClose } from "./film.js";
import { getIsPosterOpen, setIsIsPosterOpen } from "./state.js";


export const setupEventListeners = () => {
  //закрывает постер по крестику
  // closeBtn.addEventListener('click', handlePosterClose);

  //открывает постер по клиу на карточку фильма
  movieList.addEventListener('click', (event) => {
    const target = event.target.closest('.card');
    if (target) {
      //получает id из карточки 
      const filmId = Number(target.dataset.id);
      // Проверяем состояние постера
      if (!getIsPosterOpen()) {
        movies.style.maxWidth = '65%';
        posterElement.style.display = 'block';
        setIsIsPosterOpen(true); // Обновляем состояние
      }

      // Получаем детали фильма и наполняем постер
      getFilmDetails(filmId);
    }
  });
    // Закрытие постера по клику вне постера или на кнопку закрытия
    posterElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('hero__close') || event.target === posterElement) {
        handlePosterClose();
      }
    });
};