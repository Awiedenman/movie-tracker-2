import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../Containers/SignUp/SignUp';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUp handleUserSignUp={jest.fn()} />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {

    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<SignUp handleUserSignUp={jest.fn()} />);
    });

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
      expect(wrapper.state('email')).toEqual(mockEvent.target.value)
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
});
