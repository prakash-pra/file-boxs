import Box from '../../models/box.model';
import path from 'path';
/* 
create new box
*/
const createBox = async (req, res) => {
  const { name, description } = req.body;

  // check for all input fields
  if (!(name && description)) {
    res.status(400).json({ message: 'All input is required' });
  }

  try {
    const box = new Box({
      name: name,
      description: description
    });
    await box.save();
    return res.status(200).json({ message: 'Box successfully created.' });
  } catch (err) {
    throw err;
  }
};

/* 
edit box name and discription
*/
const editBox = async (req, res) => {
  const { id, name, description } = req.body;
  try {
    const boxs = await Box.findByIdAndUpdate(
      id,
      {
        $set: { name: name, description: description }
      },
      { returnDocument: 'after' }
    );
    return res.status(200).json({ result: boxs });
  } catch (err) {
    throw err;
  }
};

/*
upload file into box
 */
const uploadFile = async (req, res) => {
  const { id } = req.body;
  const file_path = req.file.path;
  try {
    const { has_file } = await Box.findById(id).select('has_file');

    if (!has_file) {
      const boxs = await Box.findByIdAndUpdate(
        id,
        {
          $set: { file_path: file_path, has_file: true }
        },
        { returnDocument: 'after' }
      );
      return res.status(200).json({ result: boxs });
    }
    return res.status(200).json({ message: 'Sorry, file already exist' });
  } catch (err) {
    throw err;
  }
};

/* 
get all box
*/
const getFileBoxs = async (req, res) => {
  try {
    const boxs = await Box.find({});
    res.status(200).json({ result: boxs });
  } catch (err) {
    throw err;
  }
};

/* 
get all owned box
*/
const getBoxs = async (req, res) => {
  try {
    const ownerId = req.userId;
    const boxs = await Box.find({}).where(ownerId);
    res.status(200).json({ result: boxs });
  } catch (err) {
    throw err;
  }
};

/* 
download file from box
*/
const downloadFile = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const box = await Box.findById(id);
    console.log(box);

    if (box) {
      console.log('sdfa');
      const file_path = box.file_path;
      if (!file_path == null || !file_path == undefined || !file_path == '') {
        const fileName = file_path.split('\\')[2];
        console.log('checking...');
        return res
          .status(200)
          .download(path.join(`public/Files/` + fileName), fileName);
      }
      console.log('file not found.');
    }
    res.status(404).json({ message: 'not found' });
  } catch (err) {
    throw err;
  }
};

/* 
 change file type
*/
const changeFileType = async (req, res) => {
  const { id } = req.body;
  try {
    const box = await Box.findByIdAndUpdate(
      id,
      {
        $set: { type: 'PUBLIC' }
      },
      { returnDocument: 'after' }
    );
    return res.status(200).json({ result: box });
  } catch (err) {
    throw err;
  }
};

export {
  createBox,
  getBoxs,
  editBox,
  uploadFile,
  downloadFile,
  changeFileType,
  getFileBoxs
};
