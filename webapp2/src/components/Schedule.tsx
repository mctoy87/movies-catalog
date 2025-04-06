import React, {useState} from 'react';

interface Hall {
  id: number;
  name: string;
  technology: string;
}

interface Showtime {
  id: number;
  time: string;
  price: number;
  hall: Hall;
  date: string;
}

interface ScheduleProps {
  title: string;
  showtimes: Showtime[]; // Измените тип на Showtime[]
}

export const Shedule: React.FC<ScheduleProps> = ({title, showtimes}) => {
  const [selectedSession, setSelectedSession] = useState<Showtime | null>(null);

  const handleSessionClick = (session: Showtime) => {
    setSelectedSession(session);
    console.log(`Время выбранного сеанса ${session.time}`);
  };

  // Фильтрация ближайших сеансов
  const currentDate = new Date();

  const upcomingShowtimes = showtimes.filter((showtime) => {
    const showtimeDate = new Date(`${showtime.date}T${showtime.time}:00`);
    return showtimeDate >= currentDate; // Оставляем только будущие сеансы
  });

  return (
    <div className="release__shedule shedule">
      <h1 className="shedule__title">
        Расписание сеансов на СЕГОДНЯ для: {title}
      </h1>
      <ul className="shedule__list">
        {upcomingShowtimes.map((showtime) => (
          <li
            key={showtime.id}
            className="shedule__item"
            onClick={() => handleSessionClick(showtime)}
          >
            <p className="shedule__time">{showtime.time}</p>
            <p className="shedule__price">{showtime.price}₽</p>
            <p className="shedule__hall">{showtime.hall.name}</p>
          </li>
        ))}
      </ul>
      {selectedSession && (
        <div>
          <h2>Выбранный сеанс:</h2>
          <p>
            Время: {selectedSession.time} | Цена: {selectedSession.price} |{' '}
            {selectedSession.hall.name} | Дата: {selectedSession.date}
          </p>
        </div>
      )}
    </div>
  );
};
