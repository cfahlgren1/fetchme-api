"use strict";

const express = require("express");
const connectDB = require("./src/database");
const morgan = require("morgan");
const app = express();

// log requests using morgan
app.use(morgan("combined"));

// Connect database
connectDB();

const port = 3000;

// Define Routes
app.use("/api/v1/user", require("./src/routes/api/v1/user"));
app.use("/api/v1/auth", require("./src/routes/api/v1/auth"));
app.use("/api/v1/profile", require("./src/routes/api/v1/profile"));
app.use("/api/v1/requests", require("./src/routes/api/v1/requests"));
app.use("/api/v1/teams", require("./src/routes/api/v1/teams"));

app.get("/", (req, res) => {
  res.send("Hello World! - FetchMe API");
});

// start server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
