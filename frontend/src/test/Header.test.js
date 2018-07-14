import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../Containers/Header/Header';

describe('Header', () => {
  let wrapper;
  const user = {
    id: 1,
    name: 'Bob'
  };

  beforeEach(() => wrapper = shallow(<Header user={user} />));

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


  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
