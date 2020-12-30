const User = require("../models/User");

/**
 * Get User model from User hash
 * @param  {String} id userid
 */
const getUserById = async (id) => {
  try {
    const user = await User.find({ userid: id }).select("-_id");
    return JSON.stringify(user, null, 4);
  } catch (err) {
    console.log(err.message);
    return { message: "Server Error" };
  }
};

module.exports = { getUserById };
