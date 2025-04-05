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

  return (
    <div className="release__shedule shedule">
      <h1 className="shedule__title">Расписание сеансов для: {title}</h1>
      <ul className="shedule__list">
        {showtimes.map((showtime) => (
          <li
            key={showtime.id}
            className="shedule__item"
            onClick={() => handleSessionClick(showtime)}
            style={{cursor: 'pointer', margin: '10px 0'}}
          >
            <p className="shedule__time">Время: {showtime.time}</p>
            <p className="shedule__price">Цена: {showtime.price}₽</p>
            <p className="shedule__hall">Зал: {showtime.hall.name}</p>
          </li>
        ))}
      </ul>
      {selectedSession && (
        <div>
          <h2>Выбранный сеанс:</h2>
          <p>
            Время: {selectedSession.time} | Цена: {selectedSession.price} | Зал:{' '}
            {selectedSession.hall.name}
          </p>
        </div>
      )}
    </div>
  );
};
