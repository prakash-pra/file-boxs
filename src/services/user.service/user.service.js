import User from '../../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

/* 
create new user
*/
const createUser = async (req, res) => {
  const { name, email, password, has_role } = req.body;

  try {
    const user = new User({
      name: name,
      email: email,
      password: password,
      has_role: has_role
    });
    const result = await user.save();
    return res.status(200).json({ result: result });
  } catch (err) {
    if (!err.keyValue) {
      res.status(400).json(err.message);
    } else {
      res.status(400).json(err.keyValue.email + ' already exist');
    }
  }
};

// create token for user login api
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) throw new Error('User does not exist');
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Password is incorrect!');
    const token = await jwt.sign(
      { userId: user.id, email: user.email },
      config.secert,
      { expiresIn: '1hr' }
    );
    return res.status(200).json({
      userId: user.id,
      token: token,
      tokenExpiration: 1
    });
  } catch (err) {
    throw err;
  }
};

export { createUser, userLogin };
