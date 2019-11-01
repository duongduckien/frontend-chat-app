import React from 'React';
import { shallow } from 'enzyme';
import { Header } from '../Header';

it('render header title', () => {
    const result = shallow(<Header />).contains(<h3>Chat Application</h3>);
    expect(result).toBeTruthy();
});