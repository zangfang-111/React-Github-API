import React from 'react';
import { shallow } from 'enzyme';

import Component from './Footer';

// ====

test('Testando o componente do Footer', () => {
	const text = 'Made with  and  by Thulio Philipe';

	const footer = shallow(
		<Component />
	);

	expect(footer.text()).toBe(text);
});