import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../Containers/Login/Login';
import { userLogin } from '../Actions/index';

describe('Login', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Login handleUserLogin={jest.fn()}/>));

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

  test('should update reset state when handleSubmit is invoked', async () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.setState({
      name: 'myname',
      password: 'pass'
    });

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          email: "tman2272@aol.com",
          id: 1,
          name: "Taylor",
          password: "password"
        })
      })
    );

    await wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('email')).toEqual('');
  });

  test('should handle errors when login fails', async () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.setState({
      name: 'myname',
      password: 'pass'
    });

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      }));

    await wrapper.instance().handleSubmit(mockEvent);
    expect(window.fetch).toHaveBeenCalled();
    expect(wrapper.state('failedLogin')).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mockUser = {
      email: "tman2272@aol.com",
      id: 1,
      name: "Taylor",
      password: "password"
    };

    const actionToDispatch  = userLogin(mockUser);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleUserLogin(mockUser);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should match snapshot when hasError', () => {
    wrapper.setState({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
