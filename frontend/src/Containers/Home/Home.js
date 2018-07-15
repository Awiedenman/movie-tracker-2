import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies, addfavorite } from '../../Actions';
import { Card } from '../../Components/Card/Card';
import PropTypes from 'prop-types';

import './Home.css';
import { SignUp } from '../SignUp/SignUp';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  toggleFavorite = (id) => {
    console.log('id', id);
    this.state.loggedIn ? null : this.props.history.push('/sign-up');
    
  }
  async componentDidMount(){
    const initialFetch = await movieFetch();
    const movies = cleanMovieResponse(initialFetch);
    this.props.initialFetchData(movies);
  }

  render() {
    const displayMoviesCards = this.props.movies.map(movie => (
      <Card
        {...movie}
        key={movie.id}
        toggleFavorite={this.toggleFavorite}
      />
    ));

    return (
      <div className="home-container">
        {displayMoviesCards}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies)),
  favorites: favorite => dispatch(addfavorite(favorite))
});

export const mapStateToProps = state => ({
  movies: state.initialMovies
});

Home.propTypes = {
  initialFetchData: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
