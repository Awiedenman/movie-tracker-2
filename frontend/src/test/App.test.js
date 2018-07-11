import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from '../Containers/App/App';
import { fetchInitialMovies } from '../Actions';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('mapDispatchToProps', () => {
    test('should call dispatch when MDTP is called', () => {
      const mockDispatch = jest.fn();
      const actionToDipatch = fetchInitialMovies(mockInitialMovieResponse);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.initialFetchData(mockInitialMovieResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDipatch);

    });
  });

  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        initialMovies: mockCleanedMovieList
      };

      const mockMappedState = mapStateToProps(mockCleanedMovieList);

      expect(mockMappedState).toEqual(expected);
    });
  });
});


