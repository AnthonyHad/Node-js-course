const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware return!");
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware return!");
  res.send("<h2> Hello Coding World too!</h2>");
});

app.use("/", (req, res, next) => {
  res.send("<h2> Hello Coding World Dummy!</h2>");
});

app.listen(3000);
