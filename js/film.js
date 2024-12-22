// Этот модуль будет отвечать за рендеринг фильмов.
import { fetchData, URL_API } from './api.js';
import { createFilmCard, movies, posterElement, renderFilmDetails } from './dom.js';
import { movieList } from './dom.js';
import { setIsIsPosterOpen, getCurrentFilmId, getIsPosterOpen, setCurrentFilmId } from './state.js';

export const renderFilms = (films) => {
  films.forEach(film => {
    const filmCard = createFilmCard(film);
    movieList.append(filmCard);
  });
};

//получить детали фильма
export const getFilmDetails = async (filmId) => {
  // Проверяем, открыт ли уже постер с этим фильмом
  if (getIsPosterOpen() && getCurrentFilmId() === filmId) {
    console.log(`Этот постер с ID ${filmId} уже открыт`);
    return; // Если открыт и идентификатор совпадает, выходим из функции
  }

  // получаем и очищаем постер 
  posterElement.innerHTML = '';

  // создаем preloader и вставляем в постер
  const loader = document.createElement('div');
  loader.classList.add('hero__loader-wrapper');
  loader.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
  posterElement.append(loader);
  try {
    // получаем данные постера с API
    const dataFilm = await fetchData(URL_API + filmId);
  
    // отобразить детали фильма на странице
    renderFilmDetails(dataFilm);
    
    // Удаляем индикатор загрузки
    loader.remove();

    // Устанавливаем флаг, что постер открыт
    setIsIsPosterOpen(false); 

     // Сохраняем идентификатор текущего фильма
    setCurrentFilmId(filmId);
  } catch (error) {
    console.error('Ошибка получения данных фильма:', error);
    posterElement.innerHTML = '<p>Ошибка загрузки данных фильма. Пожалуйста, попробуйте позже.</p>';
  }
};

// Функция для обработки клика на кнопке закрытия постера фильма
export const handlePosterClose = () => {
      // Удаляем элемент постера
      posterElement.style.display = 'none';
      movies.style.maxWidth = 'none';
      
      // Сбрасываем флаг - постер закрыт
      setIsIsPosterOpen(false); 
};

