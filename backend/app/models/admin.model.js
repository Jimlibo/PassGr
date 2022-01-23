const sql = require("./db.js");
const conf = require("../config/db.config.js");   // for the credentials

const Admin = function(admin) {
	this.username = admin.username;
	this.password = admin.password;
	this.email = admin.email;
};

Admin.check_connection = result => {   // check connection with the database
	sql.ping((err) => {
		connection_string = "mysql://" + conf.USER + ":" + conf.PASSWORD + "@" + conf.HOST + "/" + conf.DB;   // string with connection details
		if (err) {   // connection with the database is closed
			result(err, {connection_details: connection_string});
			return;
		} 
		// connection with the database is open
		result(null, {connection_details: connection_string});
		return;
	});
};

module.exports = Admin;   // return the Admin object with all its functions
