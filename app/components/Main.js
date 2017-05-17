// Include REact
//var React = require("react");
import React from 'react';

//Helpers for making AJAX requests to our API
//var helpers = require("./utils/helpers");
import helpers from './utils/helpers';

import Search from './children/Search';
import Results from './children/Results';
import Saved from './children/Saved';

var Main = React.createClass({

	getInitialState: function() {
		return {
			searchTerm: "",
			startDate: "",
			endDate: "",
			results: [],
			saved: [] ,
			update: false
		};
	},

	componentDidMount: function() {
		console.log("This is where componentDidMount");
		console.log(this.state);

		helpers.getSaved().then(function(response) {
			console.log("componentDidMount response: ");
			console.log(JSON.stringify(response));
			if(response !== this.state.saved){
				this.setState({saved: response.data});
			}
		}.bind(this));
	},

	componentDidUpdate: function(prevProps, prevState) {

		if(prevState.searchTerm !== this.state.searchTerm){

			console.log("This is where componentDidUpdate");
			console.log(this.state.results);

			helpers.runQuery(this.state.searchTerm, this.state.startDate, this.state.endDate)
				.then(function(data) {
					console.log("Results from update:")
					console.log(data);
					this.setState({results: data});
				}.bind(this));
		}

		// if(this.state.update){
		// 	this.getSaved();
		// 	this.setState({ update: false });
		// }

	},

	getSaved: function() {

		helpers.getSaved().then(function(response) {
			console.log("componentDidMount response: ");
			console.log(JSON.stringify(response));
			if(response !== this.state.saved){
				this.setState({saved: response.data});
			}
		}.bind(this));

	},

	setSearch: function(search) {
		this.setState({ searchTerm: search });
	},

	setStart: function(start) {
		this.setState({ startDate: start });
	},

	setEnd: function(end) {
		this.setState({ endDate: end });
	},

	postSaved: function(article) {
		helpers.postSaved(article);
		//this.setState({ update: true });
	},

	deleteSaved: function(id) {
		helpers.deleteSaved(id);	
	},

	render: function () {
		return (
			
				<section id="mainPage container">
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
					<Search
						setSearch={this.setSearch} 
						setStart={this.setStart}
						setEnd={this.setEnd}
					/>
					<Results results={this.state.results} postSaved={this.postSaved} getSaved={this.getSaved} />
					<Saved saved={this.state.saved} deleteSaved={this.deleteSaved} getSaved={this.getSaved} />
				</section>
				
		);
	}
});

module.exports = Main;