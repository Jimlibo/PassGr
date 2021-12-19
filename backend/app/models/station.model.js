const sql = require("./db.js"); 

const Station = function(station) {    // defining a constructor for table <station> from our db
	this.StationID = station.StationID;
	this.OperatorID = station.OperatorID;
	this.StationName = station.StationName;
};

Station.create = (newStation, result) => {   // create a new entry
	sql.query("INSERT INTO stations SET ?", newStation, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("Created new Station: ", {id:res.insertId, ...newStation});
		result(null, {id:insertId, ...newStation});
	});
};

Station.deleteOne = (id, result) => {   // if we want to delete a specific station, identified by StationID
	sql.query(`DELETE FROM station WHERE StationID = '${id}'`, (err, res) => {
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

Station.deleteAll = result => {   // deleting all entries from table station
	sql.query("DELETE FROM station WHERE original = 0", (err, res) => {   // original represents whether or not a station is from sampledata
		if (err) {
			conosle.log("error: ", err);
			result(err, null);
			return;
		}

		result(null, res);
		return;
	});
};

module.exports = Station;   // return the Station object with all its functions