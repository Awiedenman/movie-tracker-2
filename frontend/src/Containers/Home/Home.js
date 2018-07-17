import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movieFetch, postUserFavorites } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies, addFavorite, removeFavorite } from '../../Actions';
import Card from '../../Components/Card/Card';


import './Home.css';

export class Home extends Component {
  
  toggleFavorite = (movie, userId) => {
    const matchedFavorite = this.props.userFavorites.find( favorite => {
      return movie.id === favorite.id;
    });
    if (!matchedFavorite.length){
      this.props.addFavorite(movie, userId);
      try {
        postUserFavorites(movie, userId);
      } catch (error){
        Error('shit broke');
      }
    } else {
      this.props.removeFavorite(movie, userId);
    }

    // this.retreiveUserFavorites(userId);
  
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
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  userFavorites: PropTypes.array

};

export const mapStateToProps = state => ({
  movies: state.initialMovies,
  userId: state.userInfo.id,
  userFavorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies)),
  addFavorite: (movie, userId) => dispatch(addFavorite(movie, userId)),
  removeFavorite: (movie, userId) => dispatch(removeFavorite(movie, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
