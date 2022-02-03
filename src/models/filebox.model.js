import mongoose from 'mongoose';
import uuid from 'uuid';
import { boxStatus } from '../constants/constant';

const Schema = mongoose.Schema;

const boxSchema = new Schema({
  _id: {
    type: String,
    required: true,
    default: uuid.v4
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: [...Object.keys(boxStatus)],
    default: boxStatus.PRIVATE
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

module.exports = mongoose.model('Box', boxSchema);
