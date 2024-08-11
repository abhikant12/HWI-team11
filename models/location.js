const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  locationName: { type: String, required: true, unique: true },
  emails: [{ type: String }]                                         // Array to store emails of users in this location
});

module.exports = mongoose.model('Location', locationSchema);
