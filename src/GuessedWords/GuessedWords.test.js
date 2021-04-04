import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtil';
import GuessedWords from './GuessedWords.component';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3
    }]
};

const setupGuessedWordsComponent = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

describe('Guessed words component tests', () => {

    test('does not throw warning with expected props', () => {
        checkProps(GuessedWords, defaultProps);
    });

    describe('if there are no words guessed', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setupGuessedWordsComponent({ guessedWords: [] });
        });

        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'component-guessed-words');
            expect(component.length).toBe(1)
        });

        test('renders instructions to guess a word', () => {
            const message = findByTestAttr(wrapper, 'guess-instructions');
            expect(message.text().length).not.toBe(0);
        });
    });

    describe('if there are words guessed', () => {

    });
});