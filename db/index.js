// Load module
const mysql = require('mysql');
// Initialize pool
const pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'ggmu',
    database : 'gromo',
    debug    :  false
});   
 
module.exports = pool;