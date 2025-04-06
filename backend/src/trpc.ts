import {initTRPC} from '@trpc/server';
import _ from 'lodash';
import {z} from 'zod';

const films = _.times(100, (i) => ({
  id: `${i}`,
  nameRu: `Film title id: ${i}`,
  year: `${1900 + i}`,
  length: Math.floor(Math.random() * (200 - 60)) + 60, // генератор случайных чисел от 60 до 200
  rating: 8.2,
  description: `Описание фильма id: ${i}`,
  countriesText: 'США',
  posterUrl: `https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg`,
  genres: ['Приключение', 'Боевик'],
  director: 'Дени Вильнёв',
  actors: ['Тимоти Шаламе', 'Зендая', 'Ребекка Фергюсон', 'Хавьер Бардем'],
  showtimes: [
    {
      id: 1,
      time: '10:00',
      price: 450,
      hall: {id: 1, name: 'Зал 1', technology: 'IMAX'},
      date: '2024-11-01',
    },
    {
      id: 2,
      time: '13:30',
      price: 450,
      hall: {id: 1, name: 'Зал 1', technology: 'IMAX'},
      date: '2025-12-01',
    },
    {
      id: 3,
      time: '17:00',
      price: 500,
      hall: {id: 2, name: 'Зал 2', technology: 'Dolby Atmos'},
      date: '2025-11-01',
    },
    {
      id: 4,
      time: '20:30',
      price: 550,
      hall: {id: 2, name: 'Зал 2', technology: 'Dolby Atmos'},
      date: '2025-12-01',
    },
  ],
}));

// const films = [
//   {id: 1234, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
//   {id: 1235, nameRu: 'Oblivion', year: 2001, length: 189, rating: 8.2},
//   {
//     id: 1236,
//     nameRu: 'Back to the future',
//     year: 2001,
//     length: 189,
//     rating: 8.2,
//   },
//   {id: 1237, nameRu: 'Forest Gump', year: 2001, length: 189, rating: 8.2},
//   {id: 1238, nameRu: 'Home alone', year: 2001, length: 189, rating: 8.2},
// ];

const x: string = 'hello';

if (Math.random()) console.log('x: ', x);
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const trpc = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const trpcRouter = trpc.router({
  getFilms: trpc.procedure.query(() => ({
    films: films.map((film) =>
      _.pick(film, ['id', 'nameRu', 'year', 'rating'])
    ),
  })),
  getFilm: trpc.procedure
    .input(
      z.object({
        filmId: z.string(),
      })
    )
    .query(({input}) => {
      const film = films.find((film) => film.id === input.filmId);
      // if (!film) throw new Error(`Film ${input.input.filmId} is not found`);
      return {film: film || null};
    }),
});

export type TrpcRouter = typeof trpcRouter;
