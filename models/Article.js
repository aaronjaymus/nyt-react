// Require mongoose
var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  leadParagraph: {
    type: String
  },
  // link is a required string
  link: {
    type: String,
    required: true,
    unique: true
  },
  //Date saved in order to sort by
  dateSaved: {
    type: Date,
    required: true
  }
});

//Use uniqueValidator on Article to ensure no two article links are the same
ArticleSchema.plugin(uniqueValidator);
// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
