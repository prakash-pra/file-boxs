import express from 'express';
import {
  createUser
} from '../services';

const Router = express.Router();
/*
1.create box route
 */
Router.route('/createuser').post(createUser);

export default Router;
