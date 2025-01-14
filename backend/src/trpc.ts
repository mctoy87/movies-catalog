import {initTRPC} from '@trpc/server';

const films = [
  {id: 1234, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1235, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1236, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1237, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1238, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
];

const x: string = 'hello';
console.log('x: ', x);
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
  getfilms: trpc.procedure.query(() => ({films})),
});

export type TrpcRouter = typeof trpcRouter;
