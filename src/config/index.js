import dotEnv from 'dotenv';

dotEnv.config();
/* application config */
const config = {
  port: process.env.PORT,
  secert: process.env.SECERT,
  mongo_user: process.env.MONGO_USER,
  mongo_pass: process.env.MONGO_PASSWORD,
  mongo_db: process.env.MONGO_DATABASE,
  mode: {
    env: process.env.NODE_ENV
  }
};

export default config;
