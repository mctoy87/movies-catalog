import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';

const films = [
  {id: 1234, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1235, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1236, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1237, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  {id: 1238, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
];

const expressApp = express();

expressApp.get('/ping', (req, res) => {
  res.send('pong');
});

expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
);

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});