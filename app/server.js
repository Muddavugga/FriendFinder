var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;


// =============================================================
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

require('./routes/htmlRoutes.js')
require('./routes/apiRoutes.js')
app.listen(PORT, function(){
	console.log("Fuck yeah! App listening on PORT: " + PORT);
});