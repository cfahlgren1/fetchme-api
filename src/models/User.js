const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  premium: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
