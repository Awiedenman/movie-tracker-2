import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapDispatchToProps, mapStateToProps } from '../Containers/Home/Home';
import { fetchInitialMovies, addFavorite } from '../Actions';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';
import { postUserFavorites } from '../helpers/apiCalls';

jest.mock('../helpers/apiCalls');
jest.mock('../helpers/clean-responses');

describe('Home', () => {
  let wrapper;
  const mockFetchData = jest.fn();
  const mockFavFunc = jest.fn();

  beforeEach(() => wrapper = shallow(
    <Home
      initialFetchData={mockFetchData}
      movies={mockCleanedMovieList}
      userId={1}
      addFavorites={mockFavFunc}
    />
  ));

  describe('Home', () => {
    test('should fetch initial movies when componentDidMount', async () => {
      await wrapper.instance().componentDidMount();
      expect(mockFetchData).toHaveBeenCalled();
    });

    test('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('toggleFavorites',  () => {
    test('this.props.favorites should be called', async () => {
      const mockMovie = { title: 'batman', average: 7};
      const mockUserId = 6;

      await wrapper.instance().toggleFavorite(mockMovie, mockUserId);
      await postUserFavorites();
      expect(mockFavFunc).toHaveBeenCalled();
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

    test('should call dispatch when favorites', () => {
      const mockDispatch = jest.fn();
      const mockMovie = { title: 'batman', average: 7};
      const mockUserId = 6;
      const actionToDispatch = addFavorite(mockMovie, mockUserId);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorites(mockMovie, mockUserId);

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


