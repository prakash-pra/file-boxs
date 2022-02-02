import dotEnv from 'dotenv';

dotEnv.config();
/* application config */
const config = {
  port: process.env.PORT,
  secert: process.env.SECERT,
  mode: {
    env: process.env.NODE_ENV
  }
};

export default config;
