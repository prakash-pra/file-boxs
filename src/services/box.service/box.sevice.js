import Box from '../../models/index';

// create new box
const createBox = async (req, res) => {
  try {
    const box = new Box({
      name: 'prakash',
      description: 'something intersting',
      file_path: ''
    });
    const result = await box.save();
    res.json({
      sucess: true,
      code: 200,
      message: result
    });
  } catch (err) {
    throw err;
  }
};

const getBox = async (req, res) => {
  // console.log('get box');
  // try {
  //   res.json({
  //     sucess: true,
  //     code: 200,
  //     message: 'get a box'
  //   });
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }
};

export { createBox, getBox };
