import React from 'react';
import { findByTestAttr, checkProps } from '../../test/testUtil';
import { shallow } from 'enzyme';
import Input from './Input.component';

const setupInputComponent = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
}

test('renders without error', () => {
    const wrapper = setupInputComponent();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1)
});

test('does not throw warning with expected props', () => {
    const expectedProps = { secretWord: 'party' };
    checkProps(Input, expectedProps);
})

