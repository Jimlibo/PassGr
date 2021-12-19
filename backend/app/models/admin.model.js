const sql = require("./db.js");

const Admin = function(admin) {
	this.username = admin.username;
	this.password = admin.password;
	this.email = admin.email;
};

Admin.check_connection = result => {   // check connection with the database
	sql.ping((err) => {
		if (err) {   // connection with the database is closed
			result(err, {connection_details: "mysql://username:password@hostname/database"});
			return;
		} 
		// connection with the database is open
		result(null, {connection_details: "mysql://username:password@hostname/database"});
		return;
	});
};

module.exports = Admin;   // return the Admin object with all its functions