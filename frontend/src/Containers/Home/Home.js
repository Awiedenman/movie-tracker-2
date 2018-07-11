import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies } from '../../Actions';
import PropTypes from 'prop-types';

export class Home extends Component {
  constructor() {
    super();
  }

  async componentDidMount(){
    const initialFetch = await movieFetch();
    const movies = cleanMovieResponse(initialFetch);
    this.props.initialFetchData(movies);
  }

  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
});

export const mapStateToProps = movies => ({
  movies
});

Home.propTypes = {
  initialFetchData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
