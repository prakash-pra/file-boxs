import express from 'express';
import {createBox, getBox} from '../services';

const Router = express.Router();

Router.route('/createbox').get(createBox);

export default Router;
