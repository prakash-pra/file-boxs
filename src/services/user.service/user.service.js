import User from '../../models/user.model';
import bcrypt from 'bcrypt';

/* 
create new user
*/
const createUser = async (req, res) => {
  const { name, email, password, has_role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashPassword,
      has_role: has_role
    });
    const result = await user.save();
    return res.status(200).json({ result: result });
  } catch (err) {
    throw err;
  }
};

export { createUser };
