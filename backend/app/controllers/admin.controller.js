const Admin = require("../models/admin.model.js");

exports.healthcheck = (req, res) => {
	Admin.check_connection((err, data) => {
		if (err) {
			console.log("error: ", err);
			res.status(500).send({
				status: "failed,", 
				dbconnection: data['connection_details']
			});
		} else res.status(200).send({
			status: "OK", 
			dbconnection: data['connection_details']
		});
	});
};
