import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies } from '../../Actions';
import Header from '../../Components/Header/Header';
import PropTypes from 'prop-types';

import './App.css';

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
      <main className="grid-container">
        <Header />
        <section className="movie-list" />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
      </main>
    );
  }
}


export const mapStateToProps = movies => ({
  movies
});

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  initialFetchData: PropTypes.func
};
