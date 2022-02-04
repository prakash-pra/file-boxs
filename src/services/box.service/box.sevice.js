import Box from '../../models/box.model';
import path from 'path';

/* 
create new box
*/
const createBox = async (req, res) => {
  const { name, description} = req.body;
  const ownerId = req.userId;

  // check for all input fields
  if (!(name && description && ownerId)) {
    res.status(400).json({ message: 'All input is required' });
  }

  try {
    const box = new Box({
      name: name,
      description: description,
      owner_user: ownerId
    });
    const result = await box.save();
    return res.status(200).json({ result: box });
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
const getBoxs = async (req, res) => {
  try {
    const boxs = await Box.find({});
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
  try {
    const { file_path } = await Box.findOne({ id }).select('file_path');
    const fileName = path.basename(file_path);
    if (!fileName == null || !fileName == undefined || !fileName == '') {
      return res.status(200).download(file_path);
    }
    console.log('file not found.');
  } catch (err) {
    throw err;
  }
};

export { createBox, getBoxs, editBox, uploadFile, downloadFile };
