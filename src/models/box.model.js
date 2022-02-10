import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const boxSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:true
  },
  type: {
    type: String,
    enum: ['PRIVATE','PUBLIC'],
    default: 'PRIVATE'
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
