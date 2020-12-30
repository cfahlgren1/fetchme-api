const express = require("express");
const router = express.Router();

// @route     GET api/v1/auth
// @ desc     Test Route
// @access    Public
router.get("/", (req, res) => {
  res.send("Auth Route");
});
module.exports = router;
