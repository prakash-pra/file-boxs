import express from 'express';
import { fileUpload } from '../middleware';
import { createBox, getBoxs, editBox, uploadFile } from '../services';

const Router = express.Router();
/*
1.create box route
2.get box list route
3.update box name and description route
4. upload file route 
 */
Router.route('/createbox').post(createBox);

Router.route('/getboxs').get(getBoxs);

Router.route('/editbox').put(editBox);

// Router.route('/uploadfile').post(fileUpload.single('file'), uploadFile);

export default Router;
