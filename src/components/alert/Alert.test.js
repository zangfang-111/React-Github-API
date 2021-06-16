import React from 'react';
import { shallow } from 'enzyme';

import Component from './Alert';

// ====

test('Testando o componente de Alerta', () => {
	const props = {
		message: 'YO!',
	};

	const alert = shallow(
		<Component message={props.message} />
	);

	const text = 'YO!';

	expect(alert.text()).toBe(text);
});