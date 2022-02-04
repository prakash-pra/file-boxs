import express from 'express';
import { fileUpload } from '../middleware';
import { verifyToken } from '../middleware';
import {
  createBox,
  getBoxs,
  editBox,
  uploadFile,
  downloadFile,
  changeFileType
} from '../services';

const Router = express.Router();
/*
1.create box route
2.get box list route
3.update box name and description route
4. upload file route 
5. download file from box
 */
Router.route('/createbox').post(verifyToken, createBox);

Router.route('/getboxs').get(verifyToken, getBoxs);

Router.route('/editbox').put(verifyToken, editBox);

Router.route('/uploadfile').post(
  verifyToken,
  fileUpload.single('file'),
  (req, res, next) => {
    // handling multer erro later
    next();
  },
  uploadFile
);

Router.route('/downloadfile').get(downloadFile);

Router.route('/updatetype').put(verifyToken, changeFileType);

export default Router;
