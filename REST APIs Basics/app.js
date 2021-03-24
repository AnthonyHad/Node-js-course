const express = require('express');
const bodyParser = require('body-parser');


const feedRoutes = require('./routes/feed');
const app = express();


// app.use(bodyParser.urlencoded()); // only used for form data from html
app.use(bodyParser.json()) // used to parse JSON

app.use((res, req, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //allows access to any domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/feed', feedRoutes);

app.listen(8080); 