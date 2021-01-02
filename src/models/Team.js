const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "My Team",
  },
  teamid: {
    type: String,
    required: true,
    unique: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;
