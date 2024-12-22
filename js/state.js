//контроль состояния параметра текущей страницы;

export const state = {
  isFirstFetch: true, // Флаг для отслеживания первого запроса
  isPosterOpen: false, // Флаг для отслеживания открыт ли постер
  queryPage: 1, //номер открытой страницы  с фильмами
  currentFilmId: null, // идентификатор текущего фильма
};

// Геттеры
export const getIsFirstFetch = () => state.isFirstFetch;
export const getIsPosterOpen = () => state.isPosterOpen;
export const getQueryPage = () => state.queryPage;
export const getCurrentFilmId = () => state.currentFilmId;

// Сеттеры
export const setIsFirstFetch = (flag) => {
  state.isFirstFetch = flag;
};

export const setIsIsPosterOpen = (flag) => {
  state.isPosterOpen = flag;
};

export const incrementQueryPage = () => {
  state.queryPage += 1;
};

export const resetQueryPage = () => {
  state.queryPage = 1;
};

export const setCurrentFilmId = (id) => {
  state.currentFilmId = id;
};