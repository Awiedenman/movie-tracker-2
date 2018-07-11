import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../Components/SignIn/SignIn';

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SignIn />));
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
