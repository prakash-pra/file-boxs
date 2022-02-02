import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
// import { createAdmin } from './controllers/admin.controller/admin';

/* External routes import */
// import routes from './routes';

const app = express();

/* app configuration */
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* CORS setting */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, token, xxx-token'
  );
  next();
});

/* Base Router */
app.get('/', (req, res) => {
  res.json({
    sucess: true,
    message: 'Welcome to the  BASE API for File Boxs'
  });
});

/* External base router  */
// app.use('/', routes);

const port = 3000;

/* server port */

app.listen(config.port, () => {
  console.log(`The app is now running on port ${config.port}`);
});