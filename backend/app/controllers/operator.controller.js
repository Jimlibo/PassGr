const Operator = require("../models/operator.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Bad Request"
    });
  }

  // Create an Operator
  const operator = new Operator({
    Name: req.body.Name,
    ProviderAbrv: req.body.providerAbrv
  });

  // Save Operator in the database
  Operator.create(operator, (err, data) => {
    if (err)
      res.status(500).send({
        message:"Internal Server Error"
      });
    else res.status(200).send({
      status: "OK"
    });
  });
};
