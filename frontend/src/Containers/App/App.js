import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies } from '../../Actions';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor(props){
    super(props);
  }

  async componentDidMount(){
    const initialFetch = await movieFetch();
    const movies = cleanMovieResponse(initialFetch);
    this.props.initialFetchData(movies);
  }

  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  initialMovies: state
});

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  initialFetchData: PropTypes.func
};
