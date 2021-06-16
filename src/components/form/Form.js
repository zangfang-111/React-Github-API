// React
import React, { Component } from 'react';

// Assets
import Actions from '../../actions';

// Components
import Alert from '../alert/Alert';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			select: 'users',
			alertMsg: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(evt) {
		const target = evt.target;

		this.setState({
			[target.name]: target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();

		if (!this.state.input) {
			this.setState({
				alertMsg: 'Digite ao menos um termo para pesquisar.'
			});
		} else {
			this.setState({
				alertMsg: ''
			});

			Actions.submitForm(this.state);
		}
	}

	render() {
		const hasError = this.state.alertMsg;
		let alert = null;

		if (hasError) {
			alert = <Alert message={this.state.alertMsg} />;
		}

		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="field">
					  <label className="label">Search by:</label>
					  <p className="control">
					    <span className="select">
					      <select name="select" onChange={this.handleInputChange} value={this.state.select}>
					        <option value="users">User</option>
					        <option value="repositories">Repositories</option>
					      </select>
					    </span>
					  </p>
					</div>

					<div className="field">
					  <label className="label"></label>
					  <p className="control">
					    <input
					    	className="input"
					    	type="text"
					    	name="input"
					    	value={this.state.input}
					    	onChange={this.handleInputChange}
					    	placeholder="Search here" />
					  </p>
					</div>

					<div className="field is-grouped">
					  <label className="label"></label>
					  <p className="control">
					    <button className="button is-primary">
					      Search
					    </button>
					  </p>
					</div>
				</form>

				{alert}
			</div>
		);
	}
}

export default Form;