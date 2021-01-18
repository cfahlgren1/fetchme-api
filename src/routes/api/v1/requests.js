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
  const fetchRequest = await requestController.getRequestById(id);

  // if fetch request,
  if (fetchRequest) {
    res.send(fetchRequest);
    return;
  }
  res.status(404).send("404 Not Found");
});

// @route     GET api/v1/requests/:id
// @ desc     GET specific request by userid
// @access    Public
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(await requestController.userRequestsById(id));
});

module.exports = router;
