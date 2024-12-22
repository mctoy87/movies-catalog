import { fetchTopFilms } from './js/api.js';
import { setupEventListeners } from './js/eventListeners.js';
import { getFilmDetails, renderFilms } from './js/film.js';
import { getIsFirstFetch, getIsPosterOpen, setIsFirstFetch, setCurrentFilmId } from './js/state.js';

!getIsFirstFetch() && setIsFirstFetch(true); // Сбрасываем флаг после перезагрузки

export const fetchAndRenderTopFilms = async () => {

  try {
    const data = await fetchTopFilms();

    renderFilms(data.items);

    //Открытие постера первого фильма при инициализации 
    if (getIsFirstFetch() && data.items.length > 0 && data.items[0]?.kinopoiskId){
      console.log('Открывается первый фильм');
      console.log('data.items[0].kinopoiskId: ', data.items[0].kinopoiskId);
      // Устанавливаем идентификатор первого фильма
      setCurrentFilmId(data.items[0].kinopoiskId);

      // Устанавливаем флаг, что постер открыт
      getIsPosterOpen(true);

      //загружаем данные фильма в постер
      getFilmDetails(data.items[0].kinopoiskId);

      // Сбрасываем флаг после первого запроса
      setIsFirstFetch(false); 
    };

  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
    // Здесь можно добавить код для отображения ошибки пользователю
  }
};

fetchAndRenderTopFilms();

//установка слушателя событий
setupEventListeners();