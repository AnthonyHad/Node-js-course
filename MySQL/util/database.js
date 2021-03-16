//connection with DB 

const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database: 'node-complete',
    password: 'chopin123'
});

module.exports = pool.promise();