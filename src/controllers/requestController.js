// import mongoose models
const FetchRequest = require("../models/FetchRequest");
const User = require("../models/User");

/**
 * Return request with given hash
 * @param  {String} id
 */
const getRequestById = async (id) => {
  try {
    const fetchRequests = await FetchRequest.find({ hash: id }).select("-_id"); // search for request with given id
    return JSON.stringify(fetchRequests[0], null, 4);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
/**
 * Return requests by User with given userid
 * @param  {String} userid
 */
const userRequestsById = async (userid) => {
  // find user given by userid
  const user = await User.find({ userid: id }).limit(1);

  // if returned user, retrieve objectid and find fetch requests
  if (user.length > 0) {
    const userObjectId = user[0]._id;
    const fetchRequests = await FetchRequest.find({ user: userObjectId })
      .populate("user")
      .select("-response -_id");
    return JSON.stringify(fetchRequests, null, 4);
  }
  res.json([]);
};

module.exports = { getRequestById, userRequestsById };
