//Requiring npm "path" package to obtain the correct path to our html files
var path = require("path");

//ROUTING
module.exports = function (app) {
	
	//GET route to display the survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//USE route to display home.html
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};

