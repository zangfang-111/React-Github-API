// React
import React, { Component } from 'react';

// Assets
import '../../assets/css/Alert.css';

class Alert extends Component {
	render() {
		return(
			<div className="notification is-danger">
			  {this.props.message}
			</div>
		);
	}
}

export default Alert;