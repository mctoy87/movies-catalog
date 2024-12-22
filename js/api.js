import { fetchAndRenderTopFilms } from "../index.js";
import { btnShowMore, loader } from "./dom.js";

// Этот модуль будет отвечать за взаимодействие с API.
export const URL_API = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const API_KEY = 'edd584cb-c0f9-4ae3-a4c3-619573f6526b';

let queryPage = 1;

/**
 * Функция для получения данных с заданного URL.
 * @param {string} url - URL для запроса.
 * @returns {Promise<Object>} - Объект данных.
 */
export const fetchData = async (url) => {

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
  
    // Скрыть загрузчик
    loader.style.setProperty('display', 'none');
  
    // проверка на доп страницы и отображение кнопки
    if (data.totalPages > 1) {
      btnShowMore.style.setProperty('display', 'block');
      
      // увеличиваем счетчик страниц queryPage на 1
      if (data.totalPages > queryPage ) {
        queryPage += 1;
      } else {
        //скрываем кнопку
        btnShowMore.style.setProperty('display', 'none');
      };
      
      // рендерим новую страницу с 20 фильмами
      btnShowMore.onclick = fetchAndRenderTopFilms;
    }
  
    return data;

  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    loader.style.setProperty('display', 'none'); // Скрыть загрузчик при ошибке
  }

};

/**
 * Функция для получения списка 250 лучших фильмов.
 * @returns {Promise<Object>} - Объект данных с фильмами.
 */
export const fetchTopFilms = async () => {
  // Показать загрузчик
  loader.style.setProperty('display', 'block');

  // Получение данных о фильмах
  return await fetchData(`${URL_API}collections?type=TOP_250_MOVIES&page=${queryPage}`);
};

export const getQueryPage = () => queryPage; // Функция для получения текущей страницы

