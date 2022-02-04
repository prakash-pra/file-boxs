import express from 'express';
import boxRouter from './box.route';
import userRouter from './user.route';

const Router = express.Router();

Router.use('/', boxRouter);

Router.use('/', userRouter);

export default Router;
