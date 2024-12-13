// Этот файл будет основным и будет связывать все модули
import { fetchTopFilms } from './js/api.js';
import { renderFilms } from './js/film.js';

const fetchAndRenderTopFilms = async () => {
  try {
    const data = await fetchTopFilms();
    const { items } = data;
    renderFilms(items);
  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
  }
};

fetchAndRenderTopFilms();