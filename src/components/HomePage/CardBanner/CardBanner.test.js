import React from 'react';
import { shallow } from 'enzyme';
import CardBanner from './CardBanner';

describe('Testing render of CardBanner component', () => {
	it('renders without crashing', () => {
		shallow(<CardBanner />);
	});
});
