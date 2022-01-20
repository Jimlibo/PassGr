const express = require('express');
const cors = require('cors');

const app = express();

var corsOption = {
	origin: "*"
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.json({message: "Welcome to PassGR"});
});

// redirect requests to the appropriate files/functions
require("./app/routes/endpoint.routes.js")(app); 

// redirect request about admin operations, i.e. resetStations
require("./app/routes/admin.routes.js")(app); 

// choosing a port 
const PORT = process.env.PORT || 9103;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

