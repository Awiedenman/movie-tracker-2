import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App/App';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));


  describe('App', () => {
    test('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});


