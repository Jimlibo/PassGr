module.exports = app => {

	// get the necessary controllers for all tables in our database
	const Admin = require("../controllers/admin.controller.js")
	const Operator = require("../controllers/operator.controller.js");  
	const Record = require("../controllers/charge_record.controller.js"); 
	const Station = require("../controllers/station.controller.js"); 
	const Tranceiver = require("../controllers/vehicle.controller.js"); 
	const Pass = require("../controllers/pass.controller.js"); 

	var router = require("express").Router();   // initializing the router

	// Necessary endpoints for deployment
	router.get("/healthcheck", Admin.healthcheck);
	router.post("/resetpasses", Pass.reset);
	router.post("/resetstations", Station.reset);
	router.post("/resetvehicles", Tranceiver.reset);

	// base url of our api for admin operations
	app.use("/interoperability/api/admin", router);  
}
