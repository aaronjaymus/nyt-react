//Require JQuery
var $ = require("jquery");

//require Axios
var axios = require("axios");

//NY Times API Key
var apiKey = "fd55086accba45109946f7f9596171b9";

var helpers = {

	runQuery: function(searchTerm, startDate, endDate) {
		var search = searchTerm;
		var start = startDate;
		var end = endDate;

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryURL += '?' + $.param({
  			'api-key': apiKey,
 		  	'q': search,
  			'begin_date': start + "0101",
  			'end_date': end + "1231",
  			'sort': "newest"
  		});

  		// $.ajax({
  		// 	url: queryURL,
  		// 	method: "GET"
  		// }).done(function(response){
  		// 	console.log(response);
  		// 	return response;
  		// }).fail(function(err){
  		// 	throw err;
  		// });
  		return axios.get(queryURL).then(function(response){
  			if(response.data.response.docs){
  				return response.data.response.docs;
  			} else {
  				console.log("Error empty response");
  				return "";
  			}
  		});
  		
	},

	getSaved: function() {
		console.log("getSaved ran");
		
		return axios.get("/saved");
	},

	postSaved: function(event) {

		// return axios.post("/saved", {title: title, link: url});
		console.log("postSaved ran");
	  console.log(event);
  }

};

module.exports = helpers;