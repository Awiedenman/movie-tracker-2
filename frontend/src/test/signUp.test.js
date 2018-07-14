import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps } from '../Containers/SignUp/SignUp';
import { userSignUp } from '../Actions';


describe('SignUp', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow( < SignUp handleUserSignUp={ jest.fn() }/>));

  describe('handleChange', () => {

    test('should update the name prop in state on change ', () => {
      const mockEvent= {
        target:{
          name:'name',
          value: 'Austin'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual(mockEvent.target.value);
    });

    test('should update prop email in state onChange', () => {
      const mockEvent = {
        target :{
          name: "email",
          value: "austin@aol.com"
        }
      };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual(mockEvent.target.value);
    });

    test('should update password prop in state onChange', () => {
      const mockEvent = {
        target: {
          name: 'password',
          value: 'password'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('password')).toEqual(mockEvent.target.value);
    });
  });

  describe('handleSubmit', () => {
    test('should call handleUserInput with the correct arguments', async () => {
      const mockResponse = ({ id: 34, status: 'success' });
      const mockHandleUserSignUp = jest.fn();
      const mockEvent = { preventDefault: jest.fn() };

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        }));

      wrapper = shallow(
        <SignUp
          handleUserSignUp={mockHandleUserSignUp}
        />
      );

      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleUserSignUp).toHaveBeenCalledWith(mockResponse);
    });

    test('should reset the value of state to an empty string on submit', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      wrapper.setState({
        name: 'Austin',
        email: 'austin@aol.com',
        password: 'password'
      });

      await wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state('userName')).toEqual('');
      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('password')).toEqual('');
    });

    test('should throw error when signUp fails', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          ok: false
        }));

      await wrapper.instance().handleSubmit(mockEvent);
      expect(window.fetch).toHaveBeenCalled();
      expect(wrapper.state('failedSignUp')).toEqual(true);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with a userSignUp action when handleUserSignUp is called', () => {
      const mockDispatch = jest.fn();
      const mockActionToDispatch = userSignUp('Austin', 'austin@aol.com', 'password');

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.handleUserSignUp('Austin', 'austin@aol.com', 'password');

      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch);
    });
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});