//DEPENDENCIES 
//Requiring npm packages to improve app functionality
var express = require("express"),
	bodyparser = require("body-parser"),
	path = require("path");

//Creating an express server
var app = express();

//Setting initial PORT
var PORT = process.env.PORT || 3000;

// Using the body-parser package to make data legible to our server
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

//ROUTER
//Pointing our server to our route files i.e. apiRoutes & htmlRoutes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//LISTENER code which starts our express server
app.listen(PORT , function () {
	console.log("App is listenign on port: " + PORT);
});