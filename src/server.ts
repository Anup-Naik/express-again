import morgan from 'morgan';

import { buildApp } from './app.js';

const port = +process.env.PORT! || 3000;
const app = buildApp();

const environment = process.env.NODE_ENV || 'development';
app.use(environment === 'development' ? morgan('dev') : morgan('tiny'));

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal recieved: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
