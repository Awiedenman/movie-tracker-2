import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../Components/SignUp/SignUp';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SignUp />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
