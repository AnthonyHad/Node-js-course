const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in another Middleware!");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //   res.send("<h1> Hello From Express</h1>"); // instead of res.write chunks
});

module.exports = router;
