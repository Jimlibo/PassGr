const csv = require('csvtojson');
const converter = require('json-2-csv');
const Pass = require("../models/pass.model.js");
const Admin = require("../models/admin.model.js");

// Function that prints the error 
function whatError(res, error) {
	if (error == "not_found") {
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

// update db with passes from a given file
exports.passesUpdate = (req, res) => { 
	var csvString = req.file.buffer.toString();   // get the csv file from the buffer and turn it to string
	csv_array = csvString.split('\n');   // split the above string into rows
	if (csv_array.length == 0) {
		res.status(400).send({
			message: 'File is empty'
		});
		return;
	}
	else {
		console.log("entering for loop");
		for (let i = 1; i < csv_array.length; i++) {   // for each row in the file, create an  entry in the table "pass" of the db
			let row = csv_array[i].split(';');   // for each row, split the original cells of the csv
			pass = new Pass({
				PassID: row[0],
				StationID: row[2],
				VehicleID: row[3],
				Timestamp: row[1],
				charge: row[4]
			});
			Pass.create(pass, (err, data) => {
				if (err) {   // send error message and exit, if error occurred
					console.log("error: ", err);
					res.status(500).send({
						status: "failed"
					});
					return;
				}
			});
		}
		res.status(200).send({   // if everything went fine, return the appropriate message with code 200
			message: "OK"
		});
	}
	
};
