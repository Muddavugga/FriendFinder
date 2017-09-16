//  the html routes are to help direct the user. 
// Whenever they click on a link, the router will understand, based on this info
// what page to deliver to them.


var path = require('path');
module.exports = function (app) {
	

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '../survey.html'));
	});

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '../public/home.html'));
	});

	
	
}