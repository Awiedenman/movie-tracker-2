import React from 'react';
import { shallow } from 'enzyme';
import App from '../Containers/App/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

