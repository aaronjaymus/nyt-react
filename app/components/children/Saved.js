//var React = require("react");
import React from 'react';

var Saved = React.createClass({

	render: function() {

		return (
			<div className="container">
				<h3><span className="glyphicon glyphicon-floppy-disk"></span>Saved Articles</h3>
			</div>
		);
	}
});

module.exports = Saved;