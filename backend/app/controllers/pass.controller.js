const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const Pass = require("../models/pass.model.js");

// PassePerStation Deployment
exports.findPassesPerStation = (req, res) => {
	Pass.getPassesPerStation(req.params.stationID, req.params.date_from, req.params.date_to, 
		
		// Controller Implementation
		(err, data) => {
			if (err) {
				res.status(402).send({message: 'No data'});
			}
			else  {
				res.status(200).send(data);
			}
		})
};


// PassesAnalysis Deployment
exports.findPassesAnalysis = (req, res) => {
	Pass.getPassesAnalysis(req.params.op1_ID, req.params.op2_ID, req.params.date_from, req.params.date_to, 

		// Controller Implementation
		(err, data) => {
			if (err) {
				res.status(402).send({message: 'No data'});
			}
			else {
				res.status(200).send(data);
			}
		})
}

// PassesCost Deployment
exports.findPassesCost = (req, res) => {
	Pass.getPassesCost(req.params.op1_ID, req.params.op2_ID, req.params.date_from, req.params.date_to, (err, data) => {
		if (err) {
		      if (err.kind === "not_found") {
			res.status(402).send({
			  message: `No data`
			});
		      } 
		      else {
			res.status(500).send({
			  message: "Internal server error"
			});
		      }
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
		if(err) {
			res.status(402).send({message: 'No data'});
		}
		else {
			res.status(200).send(data);
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
