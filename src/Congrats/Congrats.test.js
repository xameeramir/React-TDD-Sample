import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtil';
import Congrats from './Congrats.component';

const defaultProps = { success: false };

const setupCongratsComponent = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
}

describe('Congrats component tests', () => {
    test('renders without error', () => {
        const wrapper = setupCongratsComponent({ success: false });
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.length).toBe(1)
    });

    test('renders no text when success prop is false', () => {
        const wrapper = setupCongratsComponent({ success: false });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.length).toBe(0);
    });

    test('renders non-empty congrats message when success prop is true', () => {
        const wrapper = setupCongratsComponent({ success: true });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text().length).not.toBe(0);
    });

    test('does not throw warning with expected props', () => {
        const expectedProps = { success: false };
        checkProps(Congrats, expectedProps);
    })
});