import express from 'express';
import boxRouter from './box.route';

const Router = express.Router();

Router.use('/', boxRouter);

export default Router;
