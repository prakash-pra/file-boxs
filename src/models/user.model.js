import mongoose from 'mongoose';
import { boxStatus } from '../constants/constant';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    has_role: {
      type: String
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
