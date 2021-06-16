import React from 'react';
import { shallow } from 'enzyme';
import Component from './App';

test('Testando o component APP', () => {
	const app = shallow(
		<Component />
	);

	console.warn(app);
});