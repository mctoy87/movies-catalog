// Этот файл будет основным и будет связывать все модули
import { fetchTopFilms, getQueryPage } from './js/api.js';
import { setupEventListeners } from './js/eventListeners.js';
import { getFilmDetails, renderFilms } from './js/film.js';
import { checkIsFirstFetch, setIsFirstFetch } from './js/state.js';

!checkIsFirstFetch() && setIsFirstFetch(true); // Сбрасываем флаг после перезагрузки

export const fetchAndRenderTopFilms = async () => {

  try {
    const data = await fetchTopFilms();

    renderFilms(data.items);

    //первый постер фильма будет первый элемент из найденных 
    if (checkIsFirstFetch() && data.items[0]?.kinopoiskId){
      getFilmDetails(data.items[0].kinopoiskId);
      setIsFirstFetch(false); // Сбрасываем флаг после первого запроса
    };

  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
  }
};

fetchAndRenderTopFilms();

//установка слушателя событий
setupEventListeners();