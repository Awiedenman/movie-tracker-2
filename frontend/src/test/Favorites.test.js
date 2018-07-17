import React from 'react';
import { shallow } from 'enzyme';
import { Favorites, mapStateToProps, mapDispatchToProps } from '../Containers/Favorites/Favorites';
import { fetchUserFavorites } from '../helpers/apiCalls';
import { removeFavorite } from '../Actions';

jest.mock('../helpers/apiCalls.js');

describe('Favorites', () => {
  let wrapper;
  const mockUser = {
    id: 1
  };
  const mockFavorites = [{name: 'thor', id: 2}];
  const mockRemoveFunc = jest.fn();

  const mockMovie = [{name:'thor', id: 1}];
  beforeEach(() => wrapper = shallow(
    <Favorites
      user={mockUser}
      movies={mockMovie}
      favorites={mockFavorites}
      removeFavorite={mockRemoveFunc}
    />
  ));

  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        favorites: mockMovie,
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

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mockMovie = { title: 'batman', id: 2 };
    const mockUserId = 1;
    const actionToDispatch = removeFavorite(mockUserId, mockMovie);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFavorite(mockUserId, mockMovie);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });


  test('should match snapshot when no movies present in favorites', () => {
    wrapper = shallow(
      <Favorites
        user={mockUser}
        movies={mockMovie}
        favorites={[]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });


  test('should should call removeFavorite if favorite already in fav array', async () => {
    const mockMovie = { title: 'Nerds', id: 3 };
    const mockUserId = 1;

    await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
    await removeFavorite();
    expect(mockRemoveFunc).toHaveBeenCalled();
  });

  test('should match snapshot when no user present in', () => {
    wrapper = shallow(
      <Favorites
        user={{}}
        movies={mockMovie}
        favorites={[]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
