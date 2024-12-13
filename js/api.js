// Этот модуль будет отвечать за взаимодействие с API.
const URL_API = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const API_KEY = 'edd584cb-c0f9-4ae3-a4c3-619573f6526b';

/**
 * Функция для получения данных с заданного URL.
 * @param {string} url - URL для запроса.
 * @returns {Promise<Object>} - Объект данных.
 */
export const fetchData = async (url) => {
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
  return data;
};

/**
 * Функция для получения списка лучших фильмов.
 * @returns {Promise<Object>} - Объект данных с фильмами.
 */
export const fetchTopFilms = async () => {
  return await fetchData(`${URL_API}collections?type=TOP_250_MOVIES&page=1`);
};