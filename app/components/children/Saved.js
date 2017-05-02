//var React = require("react");
import React from 'react';

var Saved = React.createClass({


	handleClick: function(id) {
		//console.log(id);
		this.props.deleteSaved(id);
	},

	render: function() {

		return (
			<div className="container">
				<h3><span className="glyphicon glyphicon-floppy-disk"></span>Saved Articles</h3>

				<div className="list-group">
					{this.props.saved.map(function(search, i) {
						return (
							<div className="articleResultrow">
								<a href={search.link} key={i} target="_blank" className="list-group-item">	
									<h4>{search.title}</h4> 
										
									<p>{search.leadParagraph}</p>
								</a>
								<button 
									className="btn btn-danger" 
									value={search._id}
									onClick= {() => this.handleClick(search._id)}
								>
									Delete
								</button>
							</div>
						);
					}, this)}
				</div>

			</div>

		);
	}
});

module.exports = Saved;