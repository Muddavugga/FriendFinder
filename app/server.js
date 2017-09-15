const express = require('express');
const app = express();
var PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');


// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

require('./route/htmlRoutes')(app);
require('./route/apiRoutes')(app);
app.listen(PORT, function () {
    console.log('listing on localhost:'+PORT);
    
})