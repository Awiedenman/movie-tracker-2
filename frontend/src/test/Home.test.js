import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapDispatchToProps, mapStateToProps } from '../Containers/Home/Home';
import { fetchInitialMovies, addFavorite, addExistingFavorites, removeFavorite } from '../Actions';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';
import { postUserFavorites, fetchUserFavorites, deleteUserFavorite } from '../helpers/apiCalls';
import { cleanMovieResponse, cleanFavoritesResponse } from '../helpers/clean-responses';

jest.mock('../helpers/apiCalls');
jest.mock('../helpers/clean-responses');

describe('Home', () => {
  let wrapper;
  const mockFetchData = jest.fn();
  const mockAddFav = jest.fn();
  const mockFavFunc = jest.fn();
  const mockRemoveFav = jest.fn();
  const mockFavorites = [{ title: 'Thor', id: 2 }, { title: 'Nerds', id: 3 }];

  beforeEach(() => wrapper = shallow(
    <Home
      initialFetchData={mockFetchData}
      movies={mockCleanedMovieList}
      userId={1}
      addFavorite={mockAddFav}
      userFavorites={mockFavorites}
      getUserFavorites={mockFavFunc}
      removeFavorite={mockRemoveFav}
    />
  ));

  describe('Home', () => {
    test('should fetch initial movies when componentDidMount', async () => {
      await wrapper.instance().componentDidMount();
      cleanMovieResponse();
      fetchUserFavorites();
      cleanFavoritesResponse();
      expect(mockFetchData).toHaveBeenCalled();
    });

    test('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('toggleFavorites',  () => {
    test('should call addFavorite be called', async () => {
      const mockMovie = { title: 'batman', average: 7, id: 3 };
      const mockUserId = 6;

      await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
      await postUserFavorites();
      expect(mockAddFav).toHaveBeenCalled();
    });

    test('should should call removeFavorite if favorite already in fav array', async () => {
      const mockMovie = { title: 'batman', average: 7, id: 3};
      const mockUserId = 6;

      await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
      await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
      await removeFavorite();
      expect(mockAddFav).toHaveBeenCalled();
    });


    test('should call removeFavorite if movie is favortied', async () => {
      const mockFavorites = [{ movie_id: 1 }, { movie_id: 2}];
      const mockMovie = { id: 2 };
      const mockUserId = 6;

      wrapper = shallow(
        <Home
          initialFetchData={mockFetchData}
          movies={mockCleanedMovieList}
          userId={1}
          addFavorite={mockAddFav}
          userFavorites={mockFavorites}
          getUserFavorites={mockFavFunc}
          removeFavorite={mockRemoveFav}
        />
      );

      await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
      expect(mockRemoveFav).toHaveBeenCalled();
    });

  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch initialFetchData is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchInitialMovies(mockInitialMovieResponse);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.initialFetchData(mockInitialMovieResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    test('should call dispatch when addFavorites is invoked', () => {
      const mockDispatch = jest.fn();
      const mockMovie = { title: 'batman', average: 7};
      const mockUserId = 6;
      const actionToDispatch = addFavorite(mockMovie, mockUserId);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorite(mockMovie, mockUserId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    test('should call dispatch when getUserFavorites', () => {
      const mockDispatch = jest.fn();
      const mockFavorite = { title: 'batman', average: 7 };
      const actionToDispatch = addExistingFavorites(mockFavorite);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.getUserFavorites(mockFavorite);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    test('should call dispatch when removeFavorite is invoked', () => {
      const mockDispatch = jest.fn();
      const mockMovie = { title: 'batman', average: 7 };
      const mockId = 1;
      const actionToDispatch = removeFavorite(mockMovie, mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.removeFavorite(mockMovie, mockId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });


  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        movies: mockCleanedMovieList,
        userId: 1
      };

      const mockState = {
        initialMovies: mockCleanedMovieList,
        userInfo: {
          id: 1
        }
      };

      const actual = mapStateToProps(mockState);

      expect(actual).toEqual(expected);
    });
  });
});


