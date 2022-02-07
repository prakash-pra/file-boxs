import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/Files');
  },
  filename(req, file, cb) {
    const fileNamed = path.parse(file.originalname);
    cb(
      null,
      `${fileNamed.name.toString().trim()}-${Date.parse(
        new Date().toUTCString()
      )}${fileNamed.ext}`
    );
  }
});
// function fileFilter(req, file, cb) {
//   console.log(file.mimetype);
//   if (file.mimetype === 'text/csv') {
//     cb(null, true);
//   } else {
//     cb('File Type Not Match !!!', false);
//   }
// }

const fileUpload = multer({
  storage
});

export { fileUpload };
