import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies } from '../../Actions';
import Header from '../../Components/Header/Header';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
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
        <section className="main-container">
          <Route exact path="/" render={()=> <div><h1>home</h1></div>} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </section>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  initialFetchData: PropTypes.func
};
