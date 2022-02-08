import express from 'express';
import { fileUpload } from '../middleware';
import { verifyToken } from '../middleware';
import {
  createBox,
  getBoxs,
  editBox,
  uploadFile,
  downloadFile,
  changeFileType,
  getFileBoxs
} from '../services';

const Router = express.Router();

Router.route('/createbox').post(createBox);

Router.route('/getboxs').get(getBoxs);

Router.route('/getfileboxs').get(getFileBoxs);

Router.route('/editbox').put(editBox);

Router.route('/uploadfile').post(
  fileUpload.single('file'),
  (req, res, next) => {
    // handling multer erro later
    next();
  },
  uploadFile
);

Router.route('/downloadfile').post(downloadFile);

Router.route('/updatetype').put(changeFileType);

export default Router;
