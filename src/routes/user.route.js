import express from 'express';
import { createUser, userLogin } from '../services';
import { verifyToken } from '../middleware';

const Router = express.Router();
/*
1.create box route
2. create token route
 */
Router.route('/createuser').post(createUser);

Router.route('/userlogin').post(userLogin);

export default Router;
