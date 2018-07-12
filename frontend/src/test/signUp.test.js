import React from 'react';
import { shallow } from 'enzyme';	 
// import SignUp from '../Components/SignUp/SignUp';	
import { SignUp } from '../Containers/SignUp/SignUp';


describe('SignUp', () => {	 
  let wrapper;	   
 
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

  describe('handleSubmit', () => {
    test('should reset the value of state to an empty string on submit', async () => {
      const wrapper = shallow(<SignUp handleUserSignUp={jest.fn()} />);
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
  });
});	 