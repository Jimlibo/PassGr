const mysql = require('mysql');
const dbConfig = require("../config/db.config.js");   // get the credentials

// create a connection with MySQL
const connection = mysql.createConnection({   
	host: dbConfig.HOST, 
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
});

// opening the connection
connection.connect(error => {   // show the error, shall it occur
	if (error) throw error;
	console.log("Succesfully connected to the database");
});

module.exports = connection;  // when called by another file, returns the connection object