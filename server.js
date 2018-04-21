const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});