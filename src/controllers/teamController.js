// import mongoose model
const Team = require("../models/Team");

/**
 * Return all team within fetchme
 */
const getAllTeams = async () => {
  try {
    const teams = await Team.find({}).select("-_id");
    return JSON.stringify(teams, null, 4);
  } catch (err) {
    console.log(err.message);
    return { message: "Server Error" };
  }
};
/**
 * Find team information by slack teamid
 * @param  {String} id teamid
 */
const getTeamById = async (id) => {
  try {
    const teams = await Team.find({ teamid: id }).populate("members");
    return JSON.stringify(teams, null, 4);
  } catch (err) {
    console.log(err.message);
    return { message: "Server Error" };
  }
};

module.exports = { getAllTeams, getTeamById };
