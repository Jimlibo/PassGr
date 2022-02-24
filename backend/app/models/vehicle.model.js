const sql = require("./db.js");

const Vehicle = function(vehicle) {	// defining a constructor for table <vehicle> from our db
	this.tagID = vehicle.tagID;
	this.OperatorID = vehicle.OperatorID;
	this.balance = vehicle.balance;
	this.VehicleID = tvehicle.VehicleID;
	this.LicenseYear = vehicle.LicenseYear;
};

Vehicle.deleteOne = (id, result) => {   // if we want to delete a specific tag, identified by tagID
	sql.query(`DELETE FROM vehicle WHERE vehicleID = '${id}'`, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		} 
		if (res.affectedRows == 0) {
			result({kind:" not_fount"}, null);
			return;
		}

		result(null, res);	
	});
};

Vehicle.deleteAll = result => {   // deleting all entries from table vehicle
	sql.query("DELETE FROM Vehicle WHERE original = 0", (err, res) => {   // original represents whether or not a vehicle is from sampledata
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		result(null, res);
		return;
	});
};

module.exports = Vehicle;   // return the Vehicle object with all its functions