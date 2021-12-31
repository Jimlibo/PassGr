const converter = require('json-2-csv');
const Pass = require("../models/pass.model.js");

// Function that prints the error 
function whatError(res, error) {
	if (error == "not found") {
		res.status(402).send({
			message: 'No data'
		});
	}
	else {
	  	res.status(500).send({
			message: 'Internal Server Error'
		});
	}
	return;
}

// PassePerStation Deployment
exports.findPassesPerStation = (req, res) => {
	Pass.getPassesPerStation(req.params.stationID, req.params.date_from, req.params.date_to, 
		
	(err, data) => {
		// ERROR HANDLING
		if (err) {
			whatError(res, err);
			return;
		}
		// FORMAT HANDLING
		else  {
			// FORMAT == JSON
			if (!req.query.format || req.query.format == "json") res.status(200).send(data); 

			// FORMAT == CSV
			else if (req.query.format == "csv") {   
				converter.json2csv(data['PassesList'], (err, csv) => {
					if (err) throw err;
					else res.status(200).send(csv);
				});
			}

			// WRONG FORMAT
			else { 
				res.status(400).send({
					message: "Bad Request"
				});
			}
		}
	});
}


// PassesAnalysis Deployment
exports.findPassesAnalysis = (req, res) => {
	Pass.getPassesAnalysis(req.params.op1_ID, req.params.op2_ID, req.params.date_from, req.params.date_to, 

	// Controller Implementation
	(err, data) => {
		// ERROR HANDLING
		if (err) {
			whatError(res, err);
			return;
		}
		// FORMAT HANDLING
		else {
			// FORMAT == JSON
			if (!req.query.format || req.query.format == "json") res.status(200).send(data);  

			// FORMAT == CSV
			else if (req.query.format == "csv") { 
				converter.json2csv(data['PassesList'], (err, csv)=> {
					if (err) throw err;
					else res.status(200).send(csv);
				});
			}
			// WRONG FORMAT
			else {   
				res.status(400).send({
					message: "Bad Request"
				});
			}
		}
	});
}

// PassesCost Deployment
exports.findPassesCost = (req, res) => {
	Pass.getPassesCost(req.params.op1_ID, req.params.op2_ID, req.params.date_from, req.params.date_to, 
		
	// Controller Implementation
	(err, data) => {

	// ERROR HANDLING
	if (err) {
		whatError(res, err);
		return;
	}
	// FORMAT HANDLING
	else { 
		// FORMAT == JSON
		if (!req.query.format || req.query.format == "json") res.status(200).send(data);  // default, or if format is json

		// FORMAT == CSV
		else if (req.query.format == "csv") {  
			converter.json2csv(data, (err, csv) => {
				if (err) throw err;
				else res.status(200).send(csv);
			})	
		}
		// WRONG FORMAT
		else {  
			res.status(400).send({
				message: "Bad Request"
			});
		}
	}
	});	
};

//  ChargesBy Deployment
exports.findChargesBy = (req, res) => {
	Pass.getChargesBy (req.params.op_ID, req.params.date_from, req.params.date_to, 

	// Controller Implementation
	(err, data) => {
		// ERROR HANDLING
		if (err) {
			whatError(res, err);
			return;
		}
		else {
			// FORMAT == JSON
			if (!req.query.format || req.query.format == "json") res.status(200).send(data);  

			// FORMAT == CSV
			else if (req.query.format == "csv") { 
				converter.json2csv(data['PPOList'], (err, csv) => {
					if (err) throw err;
					else res.status(200).send(csv);
				})
			}
			// WRONG FORMAT
			else {  
				res.status(400).send({
					message: "Bad Request"
				});
			}
		}
	});
}

// Reset
exports.reset = (req, res) => {
	Pass.deleteAll((err, result) => {
		if (err) {
			console.log("error: ", error);
			res.status(500).send({
				status: "failed"
			});
		} else res.status(200).send({status: "OK"});
	});
};
