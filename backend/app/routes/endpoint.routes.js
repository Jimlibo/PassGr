module.exports = app => {
	// get the necessary controllers for all tables in our database
	const Operator = require("../controllers/operator.controller.js");  
	const Record = require("../controllers/charge_record.controller.js"); 
	const Station = require("../controllers/station.controller.js"); 
	const Tranceiver = require("../controllers/tranceiver.controller.js"); 
	const Pass = require("../controllers/pass.controller.js"); 

	var router = require("express").Router();   // initializing the router

	// router.post("/", Operator.create);

	router.get("/Operators", Operator.findAll);

	router.get("/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to", Pass.findCost);

	// router.get()


	app.use("/interoperability/api", router);   // base url of our api
}