const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/userController");

// @route     GET api/v1/user/
// @ desc     Get list of users on team and team information
// @access    Private
router.get("/", (req, res) => {
  res.send("User Route");
});

// @route     GET api/v1/user/userid
// @ desc     Get User Information
// @access    Private
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(await userController.getUserById(id));
});

module.exports = router;
