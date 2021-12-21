const sql = require("./db.js");    

const Operator = function(operator) {   // defining a constructor for table <operator> from our db
	//this.OperatorID = operator.OperatorID;
	this.Name = operator.Name;
	this.ProviderAbrv = operator.ProviderAbrv;
};

Operator.create = (newOperator, result) => {   // creates a new entry in operator table in our db
	sql.query(`INSERT INTO Operator (Name, ProviderAbrv) VALUES ('${newOperator.Name}', '${newOperator.ProviderAbrv}')`, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("Created new Operator: ", {id:res.insertId, ...newOperator});
		result(null, {id:insertId, ...newOperator});
	});
};


Operator.getAll = (result) => {

  sql.query("SELECT * FROM Operator", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Operators: ", res);
    result(null, res);
  });
};


Operator.findById = (id, result) => {
  sql.query(`SELECT * FROM Operator WHERE OperatorID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Operator: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Operator.deleteOne = (id, result) => {   // if we want to delete a specific pass, identified by OperatorID
  sql.query(`DELETE FROM Operator WHERE OperatorID = '${id}'`, (err, res) => {
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

Operator.deleteAll = result => {   // deleting all entries from table operator
  sql.query("DELETE FROM operator", (err, res) => {   
    if (err) {
      conosle.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
    return;
  });
};


module.exports = Operator;  // return the Operator object with all its functions
