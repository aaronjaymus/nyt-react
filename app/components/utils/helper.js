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

  		return axios.get(queryURL).then(function(response) {
  			return response;
  		});
	},

	getSaved: function() {
		return axios.get("/saved");
	},

	postSaved: function(title, url) {
		return axios.post("/saved", {title: title, link: url});
	}

};

module.exports = helpers;