
// переводит формат времени в часы из минут
export const formatDuration = (minDuration) => {
  if (minDuration < 0) {
    throw new Error('Длительность не может быть отрицательной');
  }

  const hours = Math.floor(minDuration / 60);
  const min = minDuration % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours} ч.`);
  if (min > 0) parts.push(`${min} мин.`);

  return parts.length > 0 ? parts.join(' ') : '0 мин.';
};