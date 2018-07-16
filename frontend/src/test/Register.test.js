import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Components/Register/Register';

describe('Register', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Register />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
