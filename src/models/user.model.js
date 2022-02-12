import mongoose from 'mongoose';
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      match: [emailRegex, 'Please add a valid email address.'],
      required: [true, 'Email is required'],
      unique: [true]
    },
    password: {
      type: String,
      required: [true, 'Password field is required']
    },
    has_role: {
      type: String,
      required: [true, 'Role is required']
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
