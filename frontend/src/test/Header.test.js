import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from '../Containers/Header/Header';
import { userSignOut } from '../Actions';

describe('Header', () => {
  let wrapper;
  const user = {
    id: 1,
    name: 'Bob'
  };

  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(
    <Header user={user}
      signOut={mockFunc}
    />
  ));

  describe('user sign out',  () => {
    test('should sign user out on click', () => {
      wrapper.find('.sign-out').simulate('click');

      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    test('should return a user object with user information', () => {
      const mockState = {
        userInfo: {
          id: 1,
          name: 'Bob'
        }
      };

      const mockUser = {
        user: {
          id: 1,
          name: 'Bob'
        }
      };

      const actual = mapStateToProps(mockState);
      expect(actual).toEqual(mockUser);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with the action signOut', () => {
      const mockDispatch = jest.fn();
      const mockActionToDispatch = userSignOut();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.signOut();

      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch);
    });
  });


  test('should match when logged out', () => {
    wrapper = shallow(<Header user={{}} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot logged in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
