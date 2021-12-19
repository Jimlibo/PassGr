const sql = require("./db.js");

const Tranceiver = function(tranceiver) {	// defining a constructor for table <tranceiver> from our db
	this.tagID = tranceiver.tagID;
	this.OperatorID = tranceiver.OperatorID;
	this.balance = tranceiver.balance;
	this.VehicleID = tranceiver.VehicleID;
	this.LicenseYear = tranceiver.LicenseYear;
};

Tranceiver.deleteOne = (id, result) => {   // if we want to delete a specific tag, identified by tagID
	sql.query(`DELETE FROM tranceiver WHERE tagID = '${id}'`, (err, res) => {
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

Tranceiver.deleteAll = result => {   // deleting all entries from table tranceiver
	sql.query("DELETE FROM tranceiver WHERE base = 0", (err, res) => {   // base represents whether or not a station is from sampledata
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		result(null, res);
		return;
	});
};

module.exports = Tranceiver;   // return the Tranceiver object with all its functions