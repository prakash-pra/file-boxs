import jwt from 'jsonwebtoken';
import config from '../../config';

const verifyToken = async (req, res, next) => {
  //get token on header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // check token
  if (!token || token === '' || token === null) return res.status(401);

  //verify token
  try {
    const decoded = await jwt.verify(token, config.secert);
    req.userId = decoded.userId;
  } catch (err) {
    res.status(403).json({ message: 'unauthorized token' });
    throw err;
  }
  next();
};

export { verifyToken };
