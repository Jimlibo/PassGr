const multer = require('multer');
var upload = multer({ inMemory: true}).single('file');    // for uploading a file

module.exports = app => {

	// get the necessary controllers for all tables in our database
	const Admin = require("../controllers/admin.controller.js")
	const Operator = require("../controllers/operator.controller.js");  
	const Record = require("../controllers/charge_record.controller.js"); 
	const Station = require("../controllers/station.controller.js"); 
	const Vehicle = require("../controllers/vehicle.controller.js"); 
	const Pass = require("../controllers/pass.controller.js"); 

	var router = require("express").Router();   // initializing the router

	// Necessary endpoints for deployment
	router.get("/healthcheck", Admin.healthcheck);
	router.post("/resetpasses", Pass.reset);
	router.post("/resetstations", Station.reset);
	router.post("/resetvehicles", Vehicle.reset);
	router.post("/passesupd/:username/:password", Admin.isAdmin, upload, Pass.passesUpdate);  // first check the credentials, then upload the file and try to update the database

	// base url of our api for admin operations
	app.use("/interoperability/api/admin", router);  
}
