const Tranceiver = require("../models/tranceiver.model.js");


exports.reset = (req, res) => {
	Tranceiver.deleteAll((err, result) => {
		if (err) {
			console.log("error: ", error);
			res.status(500).send({
				status: "failed"
			});
		} else res.status(200).send({status: "OK"});
	});
};