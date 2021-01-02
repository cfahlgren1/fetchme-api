const config = require("../config/db");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongodb = await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected....");
    return mongodb;
  } catch (err) {
    console.log(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
