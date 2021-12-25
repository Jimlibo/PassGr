module.exports = app => {

	// get the necessary controllers for all tables in our database
	const Operator = require("../controllers/operator.controller.js");  
	const Record = require("../controllers/charge_record.controller.js"); 
	const Station = require("../controllers/station.controller.js"); 
	const Tranceiver = require("../controllers/vehicle.controller.js"); 
	const Pass = require("../controllers/pass.controller.js"); 

	var router = require("express").Router();   // initializing the router

	// router.post("/", Operator.create);

	router.get("/Operators", Operator.findAll);

	// Necessary endpoints for deployment
	router.get("/PassesPerStation/:stationID/:date_from/:date_to", Pass.findPassesPerStation);
//	router.get("/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to", Pass.sdfs);
	router.get("/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to", Pass.findPassesCost);
//	router.get("/ChargesBy/:op_ID/:date_from/:date_to", Pass.sfsa);

	// base url of our api
	app.use("/interoperability/api", router);
}
