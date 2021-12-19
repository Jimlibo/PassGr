const express = require('express')
const bodyparser = require('body-parser')

const app = express();
const port = 8000;

// middleware 
app.use(bodyparser.json())

// initialize port for node application to run
app.listen(port, ()=> {
	console.log('Example app listening on port ${port}!');
});

// get example
app.get('/', (req, res) => {
	res.send("hello world")
});

// post example
app.post('/checkParser', (req, res) => {
	console.log("Using Body-Parser: ", req.body.value)
	res.send({"body": req.body})
})
