import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const boxSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  type: {
    type: String,
    enum: {
      values: ['PRIVATE', 'PUBLIC'],
      message: '{VALUE} is not supportrd'
    },

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
