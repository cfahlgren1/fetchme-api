const express = require("express");
const router = express.Router();
const teamController = require("../../../controllers/teamController");

// @route     GET api/v1/teams/
// @ desc     Get list of all teams on fetchme
// @access    Private
router.get("/", async (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(await teamController.getAllTeams());
});

// @route     GET api/v1/teams/:id
// @ desc     Get team information by id
// @access    Private
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(await teamController.getTeamById(id));
});

module.exports = router;
