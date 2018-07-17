import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movieFetch, postUserFavorites, fetchUserFavorites } from '../../helpers/apiCalls';
import { cleanMovieResponse, cleanFavoritesResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies, addFavorite, removeFavorite, addExistingFavorites } from '../../Actions';
import Card from '../../Components/Card/Card';

import './Home.css';

export class Home extends Component {
   componentDidMount = async () => {
     const { userId } = this.props;
     const currentMovies = await movieFetch();
     const movies = cleanMovieResponse(currentMovies);
     this.props.initialFetchData(movies);
     if (userId) {
       const response = await fetchUserFavorites(userId);
       const favorites = await cleanFavoritesResponse(response);
       this.props.getUserFavorites(favorites);
     }
   }

  toggleFavorite = (movie, userId) => {
    const { userFavorites } = this.props;
    const favoritedMovie = userFavorites.find(favorite => favorite.id === movie.id);

    if (!favoritedMovie) {
      postUserFavorites(movie, userId);
      this.props.addFavorite(movie);
    } else {
      this.props.removeFavorite(movie);
      // TODO delte from db here
    }
  }

  render() {
    const displayMoviesCards = this.props.movies.map(movie => (
      <Card
        movie={movie}
        userId={this.props.userId}
        key={movie.id}
        toggleFavorite={this.toggleFavorite}
        favorites={this.props.userFavorites}
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
  removeFavorite: PropTypes.func,
  userFavorites: PropTypes.array,
  addFavorite: PropTypes.func,
  getUserFavorites: PropTypes.func
};

export const mapStateToProps = state => ({
  movies: state.initialMovies,
  userId: state.userInfo.id,
  userFavorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies)),
  addFavorite: movie => dispatch(addFavorite(movie)),
  getUserFavorites: favorites => dispatch(addExistingFavorites(favorites)),
  removeFavorite: movie => dispatch(removeFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
