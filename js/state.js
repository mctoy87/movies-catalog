//контроль состояния параметра текущей страницы;

let state = {
  isFirstFetch: true, // Флаг для отслеживания первого запроса
  queryPage: 1,
};

export const getQueryPage = () => state.queryPage;

export const checkIsFirstFetch = () => state.isFirstFetch;

export const setIsFirstFetch = (flag) => {
  state.isFirstFetch = flag;
};

export const incrementQueryPage = () => {
  state.queryPage += 1;
};

export const resetQueryPage = () => {
  state.queryPage = 1;
};