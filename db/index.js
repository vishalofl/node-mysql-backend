const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
  	password : '',
  	database : 'gromo'
});

try {
	
	connection.connect();
  	console.log('Connected to the MYSQL database');

} catch(e) {
	console.log('Database Connetion failed:' + e);
}

module.exports = connection;
