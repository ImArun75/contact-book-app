const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
  },
});

const userModel = mongoose.model("Contact", userSchema);

module.exports = userModel