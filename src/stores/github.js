// Flux
import { EventEmitter } from 'events';

// Assets
import AppDispatcher from '../dispatcher';

let _userObj = {};

function _addItem(obj) {
	return _userObj = obj;
}

// ====

class GithubStoreFactory extends EventEmitter {
	getData() {
		return _userObj;
	}

	emitChange() {
		this.emit('github');
	}

	addChangeListener(callback) {
		this.on('github', callback);
	}

	removeChangeListener(callback) {
		this.removeListener('github', callback);
	}
};

// ====

let AppStore = new GithubStoreFactory();

AppDispatcher.register(function(payload) {
	let action = payload.action;

	switch(action.actionType) {
		case 'GITHUB':
			_addItem(action.data);
		break;

		default:
			return;
	}

	AppStore.emitChange();
});

export default AppStore;