import mongoose from 'mongoose';

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
    default: 'PRIVATE'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
