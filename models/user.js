const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  token: { type: String }
});

module.exports = mongoose.model('User', userSchema);
