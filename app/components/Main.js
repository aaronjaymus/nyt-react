// Include REact
//var React = require("react");
import React from 'react';

//Helpers for making AJAX requests to our API
//var helpers = require("./utils/helpers");
import helpers from './utils/helpers';

export default class Main extends React.Component({

	getInitialState: function() {
		return {
			searchTerm: "",
			startDate: "",
			endDate: "",
			results: "",
			saved: [] 
		};
	},

	componentDidMount: function() {
		helpers.getSaved().then(function(response) {
			console.log(response);
			if(response !== this.state.saved){
				this.setState({saved: response.data});
			}
		}.bind(this));
	},

	componentDidUpdate: function() {
		helpers.runQuery(this.state.searchTerm, this.state.startDate, this.state.endDate)
			.then(function(data) {
				console.log("Results", data);
				this.setState({results: data});
			}.bind(this));
	},

	setSearch: function(search, start, end) {
		this.setState({ searchTerm: search, startDate: start, endDate: end});
	},

	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h2 className="text-center">New York Times Search</h2>
						<p className="text-center">
							Search and save articles from the NY Times.
						</p>
					</div>
				</div>
			</div>
		);
	}
});

// export class Main;