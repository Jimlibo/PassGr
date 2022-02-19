const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('.cert/key.pem'),
  cert: fs.readFileSync('.cert/cert.pem')
};

const app = express();

var corsOptions = {
	origin: "*"
};

app.use(cors(corsOptions));
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

// to allow our private certificate
const httpsAgent = new https.Agent({ rejectUnauthorized: false }); 
// creating the https server
https.createServer(options, app).listen(PORT, ()=>{
	console.log(`Server is running on port ${PORT}.`);  
});


module.exports = app;