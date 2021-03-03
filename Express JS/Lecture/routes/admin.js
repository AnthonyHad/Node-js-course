const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  //   console.log("in another Middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product
router.post("/add-product", (req, res, next) => {
  // same route can be used for different methods
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
