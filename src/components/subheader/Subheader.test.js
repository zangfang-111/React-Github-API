import React from 'react';
import { shallow } from 'enzyme';

import Component from './Subheader';

test('Testando o componente de Subheader', () => {
	const props = {
		title: 'YO!',
		subtitle: 'this is my header'
	};

	const subheader = shallow(
		<Component title={props.title} subtitle={props.subtitle} />
	);

	const text = 'YO!this is my header';

	expect(subheader.text()).toEqual(text);
});