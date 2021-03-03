// const http = require("http");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//  .use alows us to add a new Middleware function
// app.use((req, res, next) => {
//   console.log("in the Middleware!");
//   next(); // allows the request to go to the next Middleware
// });

app.use(bodyParser.urlencoded({ extended: false })); // allows to parse data input by the user in an object
app.use(express.static(path.join(__dirname, "public"))); //alows us to serve static files with read access only

app.use("/admin", adminRoutes); // only paths containing the /admin will go to admin routes
app.use(shopRoutes);

// app.use("/add-product", (req, res, next) => {
//   console.log("in another Middleware!");
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
//   ); // instead of res.write chunks
// });

// This Middleware executes for both POST and GET requests
// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// This will only trigger for a post request  we can also use app.get
// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   console.log("in another Middleware!");
//   res.send("<h1> Hello From Express</h1>"); // instead of res.write chunks
// });

// const server = http.createServer(app);
// server.listen(3000);

//Adding a 404 error page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
