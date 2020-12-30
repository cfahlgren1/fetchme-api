"use strict";
const express = require("express");
const router = express.Router();
const requestController = require("../../../controllers/requestController");

// @route     GET api/v1/requests/:id
// @ desc     GET specific request by id
// @access    Public
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(await requestController.getRequestById(id));
});

// @route     GET api/v1/requests/:id
// @ desc     GET specific request by userid
// @access    Public
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(await requests.userRequestsById(id));
});

module.exports = router;
