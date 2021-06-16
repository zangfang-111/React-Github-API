import React from 'react';
import { mount, shallow } from 'enzyme';

import Component from './Form';

test('Testando o component de formulário', () => {
	const form = shallow(
		<Component />
	);

	console.warn(form.state());
});