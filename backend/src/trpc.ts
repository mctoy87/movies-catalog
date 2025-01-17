import {initTRPC} from '@trpc/server';
import _ from 'lodash';

const films = _.times(100, (i) => ({
  id: `${i}`,
  nameRu: `Film title id: ${i}`,
  year: `${1900 + i}`,
  length: 189,
  rating: 8.2,
  description: `Описание фильма id: ${i}`,
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
  getfilms: trpc.procedure.query(() => ({
    films: films.map((film) =>
      _.pick(film, ['id', 'nameRu', 'year', 'rating'])
    ),
  })),
});

export type TrpcRouter = typeof trpcRouter;
