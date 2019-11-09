import React from 'react';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { render, shallow, configure } from 'enzyme';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
    test('Match Snapshot', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
    test('footer has class .footer', () => {
        const footer = shallow(<Footer />);
        const footerElem = footer.find('footer');
        expect(footerElem.hasClass('footer')).toBe(true);
    });
    test('footer has 3 anchor tags', () => {
        const footer = render(<Footer />);
        expect(footer.find('a')).toHaveLength(3);
    });
});