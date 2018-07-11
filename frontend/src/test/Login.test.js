import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Containers/Login/Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Login />));

  test('should update the email prop in state change', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'me@mail.com'
      }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('email')).toEqual(mockEvent.target.value);
  });

  test('should update the password prop in state change', () => {
    const mockEvent = {
      target: {
        name: 'password',
        value: 'passmethrough'
      }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual(mockEvent.target.value);
  });

  test('should update the reset state when handleSubmit is invoked', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    const mockState = {
      name: 'myname',
      password: 'pass'
    };

    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('email')).toEqual('');
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
