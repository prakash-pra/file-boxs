import express from 'express';
import { createBox, getBoxs, editBox } from '../services';

const Router = express.Router();

Router.route('/createbox').post(createBox);

Router.route('/getboxs').get(getBoxs);

Router.route('/editbox').put(editBox);
export default Router;
