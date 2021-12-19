const sql = require("./db.js");

const ChargeRecord = function(chargeRecord) {	// defining a constructor for table <chargerecord> from our db
	this.OperatorID1 = chargeRecord.OperatorID1;
	this.OperatorID2 = chargeRecord.OperatorID2;
	this.LogData = chargeRecord.LogData;
	this.amount = chargeRecord.amount;
	this.Status = chargeRecord.Status;
	//this.RecordID = chargeRecord.RecordID;
};


module.exports = ChargeRecord   // return the ChargeRecord object with all its functions
