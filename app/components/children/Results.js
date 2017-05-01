//var React = require("react");

import React from 'react';

var Results = React.createClass({

	handleClick: function(event) {
		console.log(event);
	},

	render: function() {

		return (
			<div className="container">
				<h3><span className="glyphicon glyphicon-eye-open"></span>Search Results</h3>	
			
				<div className="list-group">
					{this.props.results.map(function(search, i) {
						return (
							<div className="articleResultrow">
								<a href={search.web_url} key={i} target="_blank" className="list-group-item">	
									<h4>{search.headline.main}</h4> 
										
									<p>{search.lead_paragraph}</p>
								</a>
								<button 
									className="btn btn-success" 
									data-value={search}
									onClick={this.handleClick}
								>
									Save
								</button>
							</div>
						);
					})}
				</div>
			
			</div>
		);
	}
});

module.exports = Results;