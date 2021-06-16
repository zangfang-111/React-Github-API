// Assets
import axios from 'axios';
import Config from '../config';

import Actions from '../../../actions';

// ====

function _searchResponse(obj) {
	console.warn(obj.data)
	Actions.handleGithubData(obj.data);
}

function _searchError(obj) {
	console.warn(obj)
}

// ====

class GithubService {
	constructor() {
		this.api_url = Config.API_URL;
	}

	get(url) {
		axios
			.get(url)
			.then((response) => _searchResponse(response))
			.catch((err) => _searchError(err));
	}

	getUser(user) {
		let searchUrl = `${this.api_url}/search/users?q=${user}`;
		this.get(searchUrl);
	}

	getRepo(repo) {
		let searchUrl = `${this.api_url}/search/repositories?q=${repo}`;
		this.get(searchUrl);
	}

	// getRepoByUser(user) {
	// 	let searchUrl = `${this.api_url}/search/users/${user}`;
	// 	this.get(searchUrl);
	// }
}

export default GithubService;