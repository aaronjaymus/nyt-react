// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Require Article model
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytimes");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Find saved articles from db
app.get("/saved", function(req, res) {
	Article.find({}).sort([
			["dateSaved", "descending"]
		]).exec(function(err, doc){
		if (err) {
			console.log(err)
		} else {
			res.send(doc);
		}
	})
});

// app.post("/saved", function(req, res) {
// 	var newArticle = new Article({
// 		title: req.body.title,
// 		link: title.body.link,
// 		dateSaved: Date.now()
// 	});

// 	Article.save(function(err, doc){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(doc);
// 		}
// 	});
// });


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

