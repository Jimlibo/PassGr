const sql = require("./db.js"); 

const Pass = function(pass) {	// defining a constructor for table <pass> from our db
	this.StationID = pass.StationID;
	this.VehicleID = pass.VehicleID;
	this.passID = pass.passID;
	this.LogData = pass.LogData;
	this.amount = pass.amount;
	//this.Type = pass.Type;
};




Pass.getCost = (op1, op2, date_from, date_to, result) => {
	sql.query(`Select COUNT(p.passID) as count FROM pass AS p JOIN station AS s USING (StationID) JOIN tranceiver AS t USING (VehicleID) WHERE s.OperatorID = ${op1}
		AND t.OperatorID = ${op2} AND p.LogData BETWEEN STR_TO_DATE(${date_from},'%Y%m%d') AND STR_TO_DATE(${date_to},'%Y%m%d')`, (err, res) => {
			if (err) {   // some interval error occurred
			      console.log("error: ", err);
			      result(err, null);
			      return;
			    }
			    if (res[0]['count'] == 0) { // no data were found
			      result({ kind: "not_found" }, null);
			      return;
			    }

			    console.log(`Found ${res[0]['count']} passes!`);
			    // finding the datetime of the request and formating the result in yyyy-mm-dd hh:mm:ss
			    var date = new Date();
				var dateStr = 
				  date.getFullYear() + "-" + 
				  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
				  ("00" + date.getDate()).slice(-2) + " " +   // end of yyy-mm-dd format

				  ("00" + date.getHours()).slice(-2) + ":" +
				  ("00" + date.getMinutes()).slice(-2) + ":" +
				  ("00" + date.getSeconds()).slice(-2);  // end of hh:mm:ss format

				// fixing the output from of date_from and date_to

				/*var from_year = 
				var from_month = 
				var from_day = */
				var date_from_str = date_from.substr(0,4) + "-" + date_from.substr(4,2) + "-" + date_from.substr(6) + " 00:00:00" 
			/*	var to_year = 
				var to_month = 
				var to_day = */
				var date_to_str = date_to.substr(0,4) + "-" + date_to.substr(4,2) + "-" + date_to.substr(6) + " 00:00:00" 

			    retval = {op1_ID: op1, op2_ID: op2, RequestTimestamp: dateStr, PeriodFrom: date_from_str , PeriodTo: date_to_str,
			    NumberOfPasses: res[0]['count'], PassesCost: Number(res[0]['count']) * 0.1};
			    result(null, retval);

		});
};

Pass.deleteOne = (id, result) => {   // if we want to delete a specific pass, identified by passID
	sql.query(`DELETE FROM pass WHERE passID = '${id}'`, (err, res) => {
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

Pass.deleteAll = result => {   // deleting all entries from table pass
	sql.query("DELETE FROM pass", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		result(null, res);
		return;
	});
};

module.exports = Pass;   // return the Pass object with all its functions