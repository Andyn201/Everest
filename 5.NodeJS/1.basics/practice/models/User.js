const mongoose = require('mongoose');
const postSchema = require('./Post');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  posts: [postSchema]
});


module.exports = mongoose.model('User', userSchema);
