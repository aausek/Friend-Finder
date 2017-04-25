//Linking our routes to the array sources in /data/friends.js
var friends = require("../data/friends.js");

module.exports = function (app) {

	//GET route to display JSON of all added friends
	app.get("/api/friends", function (req, res){
		res.json(friends);
	});
	
	//POST route to handle all incoming survey results & the compatibility logic
	app.post("/api/friends", function (req, res) {
		friends.push(req.body);
		res.json(true);
	});
} 