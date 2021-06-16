import React from 'react';
import { shallow } from 'enzyme';
import Component from './NotFound';

test('Testando o component NotFound', () => {
	const notfound = shallow(
		<Component />
	);

	console.warn(notfound);
});