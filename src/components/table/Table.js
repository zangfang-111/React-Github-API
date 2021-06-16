// React
import React, { Component } from 'react';

// Assets
import '../../assets/css/Table.css';

// ====

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: ''
		};

		this.viewMore = this._viewMore.bind(this);

		this.listHeader = null;
		this.listItems = null;
	}

	_viewMore() {
		console.warn('Bind', this);
	}

	_buildUsers(array, props) {
		this.listHeader = array.map((item, index) => {
			return(
				<th key={index}>{item}</th>
			);
		});

		this.listItems = props.data.map((item, index) => {
			return(
				<tr key={index}>
					<td>
						<img
							className="image"
							src={item.avatar_url}
							alt={item.login} />
					</td>

					<td>
						<a href={item.html_url} target='_blank'>{item.login}</a>
					</td>

					<td>{item.score}</td>

					<td>
						<button
							className="button is-info"
							onClick={this.viewMore}>
							Info
						</button>
					</td>
				</tr>
			);
		});
	}

	_buildRepos(array, props) {
		this.listHeader = array.map((item, index) => {
			return(
				<th key={index}>{item}</th>
			);
		});

		this.listItems = props.data.map((item, index) => {
			return(
				<tr key={index}>
					<td>{item.name}</td>

					<td>
						<a href={item.html_url} target='_blank'>
							{item.html_url}
						</a>
					</td>

					<td>
						<a href={item.owner.html_url} target='_blank'>
							{item.owner.login}
						</a>
					</td>

					<td>{item.language}</td>

					<td>
						<button
							className="button is-info"
							onClick={this.viewMore}>
							Info
						</button>
					</td>
				</tr>
			);
		});
	}

	render() {
		let props = this.props;

		if (props.data) {
			switch (props.type) {
				case 'users':
					let userHead = ['Image', 'Username', 'Score', ''];
					this._buildUsers(userHead, props);
				break;

				case 'repositories':
					let repoHead = ['Title', 'URL', 'User', 'Language', ''];
					this._buildRepos(repoHead, props);
				break;

				default:
					return;
			}
		}

		return(
			<table className="table">
				<thead>
					<tr>{this.listHeader}</tr>
				</thead>

				<tbody>
					{this.listItems}
				</tbody>
			</table>
		);
	}
}

export default Table;