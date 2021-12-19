const Operator = require("../models/operator.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const operator = new Operator({
    title: req.body.Name,
    description: req.body.providerAbrv
  });

  // Save Tutorial in the database
  Operator.create(operator, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Operator."
      });
    else res.send(data);
  });
};

// Retrieve all operators from db
exports.findAll = (req, res) => {
  Operator.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving operators."
      });
    else res.send(data);
  });
};

// Retrieve a specific operator based on id
exports.findOne = (req, res) => {
	Operator.findById(req.params.id, (err, data) => {
	    if (err) {
	      if (err.kind === "not_found") {
	        res.status(404).send({
	          message: `Not found Tutorial with id ${req.params.id}.`
	        });
	      } else {
	        res.status(500).send({
	          message: "Error retrieving Tutorial with id " + req.params.id
	        });
	      }
	    } else res.send(data);
  	});
};
