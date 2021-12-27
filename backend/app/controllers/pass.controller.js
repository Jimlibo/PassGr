const { convertArrayToCSV } = require('convert-array-to-csv');
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
				converter.json2csv(data, (err, csv)=> {
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
	Pass.getPassesCost(req.params.op1_ID, req.params.op2_ID, req.params.date_from, req.params.date_to, (err, data) => {

	if (err) {
		whatError(res, err);
		return;
	}
	else {   // no errors were found from server side

		if (!req.query.format || req.query.format == "json") res.status(200).send(data);  // default, or if format is json

		else if (req.query.format == "csv") {   // if format is csv

			const data_objects =[{   // create dictionary with desired headers as keys
				op1_ID: req.params.op1_ID,
				op2_ID: req.params.op2_ID, 
				RequestTimestamp: data['RequestTimestamp'],
				PeriodFrom: data['PeriodFrom'],
				PeriodTo: data['PeriodTo'], 
				NumberOfPasses: data['NumberOfPasses'],
				PassesCost: data['PassesCost']
			}] 

			const final_csv = convertArrayToCSV(data_objects);   // convert the dictionary to a csv file
			res.status(200).send(final_csv);

		}
		else {   // if wrong format option is given, return error with the appropriate code
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

				const data_objects =[{   
					op1_ID: req.params.op1_ID,
					op2_ID: req.params.op2_ID, 
					RequestTimestamp: data['RequestTimestamp'],
					PeriodFrom: data['PeriodFrom'],
					PeriodTo: data['PeriodTo'], 
					NumberOfPasses: data['NumberOfPasses'],
					PassesCost: data['PassesCost']
				}] 

				const final_csv = convertArrayToCSV(data_objects);   
				res.status(200).send(final_csv);
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
