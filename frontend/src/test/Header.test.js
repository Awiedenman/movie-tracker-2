import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Header />));
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
