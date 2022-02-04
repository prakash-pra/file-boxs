import Box from '../../models/box.model';

/* 
create new box
*/
const createBox = async (req, res) => {
  const { name, description } = req.body;

  try {
    const box = new Box({
      name: name,
      description: description
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
  const boxId = '61fc41fecdc7833620613f11';
  try {
    const boxs = await Box.findByIdAndUpdate(boxId, {
      $set: { fiel_path: 'set file location' }
    });
    return res.status(200).json({ result: boxs });
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
