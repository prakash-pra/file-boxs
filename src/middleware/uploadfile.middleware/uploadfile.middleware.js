import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../../public');
  },
  filename(req, file, cb) {
    const fileNamed = path.parse(file.originalname);
    cb(
      null,
      `${fileNamed.name
        .toString()
        .trim()
        .split(' ')
        .join('-')}-${Date.parse(new Date().toUTCString())}${fileNamed.ext}`
    );
  }
});
function fileFilter(req, file, cb) {
  if (
    file.mimetype === 'text/cvs'
  ) {
    cb(null, true);
  } else {
    cb('File Type Not Match !!!', false);
  }
}

const fileUpload = multer({
  fileFilter,
  limits: {
    fileSize: 1000000
  },
  storage
}).any();

export { fileUpload };
