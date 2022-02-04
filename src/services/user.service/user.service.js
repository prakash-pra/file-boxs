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
    // check for all input fields
    if (!(name && email && password && has_role)) {
      res.status(400).json({ message: 'All input is required' });
    }

    // check for user in db
    const userEmail = await User.findOne({ email });

    if (!userEmail) {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashPassword,
        has_role: has_role
      });
      const result = await user.save();
      return res.status(200).json({ result: result });
    }
    return res.status(400).json({ message: 'Email already registered.' });
  } catch (err) {
    throw err;
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
