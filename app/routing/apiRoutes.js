// The page is for the data.
// This will help determine what data the user sees, as well as what data
// the user is able to post to our server to store.
var friendsData = require('../data/friends.js');

module.exports = function (app) {
	app.get('/friends', function(req, res){
		res.json(friendsData);
	})

	app.post('/api', function(req, res){
		console.log('req' + req);
		console.log(' res' + res);
		res.send(JSON.stringify(friendsData));
	})
}