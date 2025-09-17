import express from 'express';

const app = express();
const port = +process.env.PORT! || 3000;

app.get('/', (request, response) => {
  response.send('Express Again');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
