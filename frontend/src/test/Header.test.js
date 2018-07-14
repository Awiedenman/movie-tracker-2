import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Containers/Header/Header';

describe('Header', () => {
  let wrapper;
  const mockUser = {name: 'tman'};
  beforeEach(() => wrapper = shallow(<Header user={mockUser} />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
