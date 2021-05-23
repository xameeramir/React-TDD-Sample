import React from 'react';
import { findByTestAttr, checkProps } from '../../test/testUtil';
import { shallow } from 'enzyme';
import Input from './Input.component';

const setupInputComponent = (props = {}) => {
    return shallow(<Input />);
}

test('renders without error', () => {
    const wrapper = setupInputComponent();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1)
});
