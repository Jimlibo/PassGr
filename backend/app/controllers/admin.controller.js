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

exports.isAdmin = (req, res, next) => {    // function to check whether someone is admin or not
	Admin.exists(req.params.username, req.params.password, (err, data) => {
		if (err) {   // if error occurred
			if (err.kind === 'not_found') {   // wrong credentials
				res.status(400).send({
					message: "Not authorized"
				});
			} else {   // other (interval) error
				res.status(500).send({
					message: "Internal Server Error"
				});
			}
		} else {   // no errors, correct credentials
			next();
		}
	});
};
