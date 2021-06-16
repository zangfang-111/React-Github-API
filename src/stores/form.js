// Flux
import { EventEmitter } from 'events';

// Assets
import AppDispatcher from '../dispatcher';

let _formObj = {};

function _addItem(obj) {
	return _formObj = obj;
}

// ====

class FormStoreFactory extends EventEmitter {
	getFormData() {
		return _formObj;
	}

	emitSubmit() {
		this.emit('submit');
	}

	addSubmitListener(callback) {
		this.on('submit', callback);
	}

	removeSubmitListener(callback) {
		this.removeListener('submit', callback);
	}
};

// ====

let AppStore = new FormStoreFactory();

AppDispatcher.register(function(payload) {
	let action = payload.action;

	switch(action.actionType) {
		case 'SUBMIT_FORM':
			_addItem(action.data);
		break;

		default:
			return;
	}

	AppStore.emitSubmit();
});

export default AppStore;