"use strict";
// dependencies
const express = require("express");
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const connectDB = require("./src/database");
const morgan = require("morgan");
const cors = require("cors");

// init app
const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// log requests using morgan
app.use(morgan("combined"));

// use CORS
app.use(cors());

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

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end('Server Error');
});

// start server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
