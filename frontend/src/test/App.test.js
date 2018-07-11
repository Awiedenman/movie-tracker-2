import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from '../Containers/App/App';
import { fetchInitialMovies } from '../Actions';
import { mockInitialMovieResponse } from '../mock-data/mock-responses';
import { mockCleanedMovieList } from '../mock-data/mock-clean-data';

describe('App', () => {
  let wrapper;
  const mockFunc = jest.fn();
  beforeEach(() => wrapper = shallow(<App initialFetchData={mockFunc}/>));


  describe('App', () => {
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
      const actionToDipatch = fetchInitialMovies(mockInitialMovieResponse);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.initialFetchData(mockInitialMovieResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDipatch);

    });
  });

  describe('mapStateToProps', () => {
    test('should return a props object with a movies array', () => {
      const expected = {
        movies: mockCleanedMovieList
      };

      const mockMappedState = mapStateToProps(mockCleanedMovieList);

      expect(mockMappedState).toEqual(expected);
    });
  });
});


