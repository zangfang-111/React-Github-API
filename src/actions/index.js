// Assets
import AppDispatcher from '../dispatcher';

let Actions = {

	submitForm(dataObj) {
		AppDispatcher.handleViewAction({
			actionType: 'SUBMIT_FORM',
			data: dataObj
		});
	},

	handleGithubData(dataObj) {
		AppDispatcher.handleViewAction({
			actionType: 'GITHUB',
			data: dataObj
		})
	}

};

export default Actions;