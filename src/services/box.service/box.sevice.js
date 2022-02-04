import Box from '../../models/box.model';

/* 
create new box
*/
const createBox = async (req, res) => {
  console.log('create box');
  try {
    const box = new Box({
      name: 'prakash',
      description: 'something intersting'
    });
    const result = await box.save();
    res.status(200).json({ result: box });
  } catch (err) {
    throw err;
  }
};

/* 
edit box name and discription
*/
const editBox = async (req, res) => {
  const boxId = '61fc41fecdc7833620613f11';
  try {
    const boxs = await Box.findByIdAndUpdate(boxId, {
      $set: { name: 'jason bourne', description: 'somethingChange' }
    });
    res.status(200).json({ result: boxs });
  } catch (err) {
    throw err;
  }
};

/*
upload file into box
 */
const uploadFile = async (req, res) => {
  const boxId = '61fc41fecdc7833620613f11';
  try {
    const boxs = await Box.findByIdAndUpdate(boxId, {
      $set: { fiel_path: 'set file location' }
    });
    res.status(200).json({ result: boxs });
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

export { createBox, getBoxs, editBox, uploadFile };
