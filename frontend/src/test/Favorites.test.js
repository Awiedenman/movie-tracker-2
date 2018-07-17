import React from 'react';
import { shallow } from 'enzyme';
import { Favorites, mapStateToProps } from '../Containers/Favorites/Favorites';
import { fetchUserFavorites } from '../helpers/apiCalls';

jest.mock('../helpers/apiCalls.js');

describe('Favorites', () => {
  let wrapper;
  const mockUser = {
    id: 1
  };
  const mockFunc = jest.fn();

  const mockMovie = [{name:'thor', id: 1}];
  beforeEach(() => wrapper = shallow(
    <Favorites
      user={mockUser}
      movies={mockMovie}
    />
  ));

  test('should call fetchUserFavorites onMount', async () => {
    await wrapper.instance().componentDidMount();
    expect(fetchUserFavorites).toHaveBeenCalledWith(mockUser.id);
  });

  test('should match snapshot when no user present', () => {
    wrapper = shallow(<Favorites user={{}} movies={mockMovie}/>);
  });

  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        movies: mockMovie,
        user: {
          id: 1
        }
      };

      const mockState = {
        favorites: mockMovie,
        userInfo: {
          id: 1
        }
      };

      const actual = mapStateToProps(mockState);

      expect(actual).toEqual(expected);
    });
  });
  test('should match snapshot when no movies present in favorites', () => {
    wrapper = shallow(<Favorites user={mockUser} movies={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
