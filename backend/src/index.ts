import express from 'express';

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

expressApp.get('/films', (req, res) => {
  res.send(films);
});

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});