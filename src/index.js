import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';

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

// database connection string
mongoose
  .connect(
    `mongodb+srv://${config.mongo_user}:${config.mongo_pass}@cluster0.qujov.mongodb.net/${config.mongo_db}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(config.port, () => {
      console.log(`The app is now running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
