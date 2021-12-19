const Station = require("../models/station.model.js");


exports.reset = (req, res) => {
	Station.deleteAll((err, result) => {
		if (err) {
			console.log("error: ", error);
			res.status(500).send({
				status: "failed"
			});
		} else res.status(200).send({status: "OK"});
	});
};