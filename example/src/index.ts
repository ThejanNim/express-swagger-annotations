import express, { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Example app listening on port 3000!');
});