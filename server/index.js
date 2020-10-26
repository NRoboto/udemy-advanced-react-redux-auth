const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

app.use(router);

const port = process.env.PORT || 3090;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
