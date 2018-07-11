import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapDispatchToProps, mapStateToProps } from '../Containers/Home/Home';
import { fetchInitialMovies } from '../Actions';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('Home', () => {
  let wrapper;
  const mockFunc = jest.fn();
  beforeEach(() => wrapper = shallow(
    <Home 
      initialFetchData={mockFunc}
      movies={mockCleanedMovieList}
    />
  ));


  describe('Home', () => {
    test('should ', async () => {
      await wrapper.instance().componentDidMount();
      expect(mockFunc).toHaveBeenCalled();
    });

    test('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });


  describe('mapDispatchToProps', () => {
    test('should call dispatch when MDTP is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchInitialMovies(mockInitialMovieResponse);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.initialFetchData(mockInitialMovieResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });


  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        movies: mockCleanedMovieList
      };
      
      const mockState = {
        initialMovies: mockCleanedMovieList
      };
        
      const actual = mapStateToProps(mockState);

      expect(actual).toEqual(expected);
    });
  });
});


