// React
import React, { Component } from 'react';

class Subheader extends Component {
	render() {
		return(
			<section className="hero is-small is-primary is-bold">
			  <div className="hero-body">
			    <div className="container">
			      <h1 className="title">
			      	{this.props.title}
		      	</h1>

			      <h2 className="subtitle">
			      	{this.props.subtitle}
		      	</h2>
			    </div>
			  </div>
			</section>
		);
	}
}

export default Subheader;