import mongoose from 'mongoose';
import { boxStatus } from '../constants/constant';

const Schema = mongoose.Schema;

const boxSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String,
    enum: [...Object.keys(boxStatus)],
    default: boxStatus.PRIVATE
  },
  has_file: {
    type: Boolean,
    default: false
  },
  file_path: {
    type: String,
    default: null
  },
  whenCreated: {
    type: Date,
    default: Date.now
  },
  whenUpdated: {
    type: Date,
    default: Date.now
  }
});

const Box = mongoose.model('Box', boxSchema);

export default Box;
