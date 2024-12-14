
// переводит формат времени в часы из минут
export const formatFilmDuration = (minDuration) => {
  const hours = Math.floor(minDuration / 60);
  const min = minDuration % 60;

  let durationFilm = '';
  if (hours > 0 ) durationFilm += (hours + 'ч. ');
  if (min > 0 ) durationFilm += (min + ' мин.');

  return durationFilm;
};