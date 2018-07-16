import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movieFetch, postUserFavorites } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies, addFavorite } from '../../Actions';
import Card from '../../Components/Card/Card';


import './Home.css';

export class Home extends Component {
  
  toggleFavorite = (movie, userId) => {
    this.props.favorites(movie, userId);
    try {
      postUserFavorites(movie, userId);
    } catch (error){
      Error('shit broke');
    }
  }

  async componentDidMount () {
    const initialFetch = await movieFetch();
    const movies = cleanMovieResponse(initialFetch);
    this.props.initialFetchData(movies);
  }

  render() {
    const displayMoviesCards = this.props.movies.map(movie => (
      <Card
        movie={movie}
        userId={this.props.userId}
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

Home.propTypes = {
  initialFetchData: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.number,
  favorites: PropTypes.func
};

export const mapStateToProps = state => ({
  movies: state.initialMovies,
  userId: state.userInfo.id
});

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies)),
  favorites: (movie, userId) => dispatch(addFavorite(movie, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
