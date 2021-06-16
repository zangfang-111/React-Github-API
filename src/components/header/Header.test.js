import React from 'react';
import { shallow } from 'enzyme';

import Component from './Header';

test('Testando o component de Header', () => {
	const header = shallow(
		<Component />
	);

	header.find('.nav-toggle').simulate('click');

	expect(header.state().isActive).toBe(true);
});