// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//Grab the routes
var routes = require("./config/routes");

//Render contents according to route page
ReactDOM.render(routes, document.getElementById("app"));

