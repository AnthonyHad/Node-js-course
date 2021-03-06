const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute);
app.use(usersRoute);

app.listen(3000);
