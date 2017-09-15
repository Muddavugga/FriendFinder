// The page is for the data.
// This will help determine what data the user sees, as well as what data
// the user is able to post to our server to store.
var friendsData = require('../data/friends.js');


module.exports = function (app) {
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	})
}

module.exports = function (app) {
	app.POST('/api/friends', function(req, res){
		res.json(friendsData);
	})
}