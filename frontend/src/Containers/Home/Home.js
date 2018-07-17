import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movieFetch, postUserFavorites, fetchUserFavorites } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
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
       const favorites = await fetchUserFavorites(userId);
       this.props.getUserFavorites(favorites.data);
     }
   }

  toggleFavorite = (movie, userId) => {
    const { userFavorites } = this.props;
    const favoritedMovie = userFavorites.find(favorite => favorite.movie_id === movie.id);

    if (!favoritedMovie) {
      postUserFavorites(movie, userId);
      this.props.addFavorite(movie);
    } else {
      // TODO remove movie from db here
    }
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
  removeFavorite: (movie, userId) => dispatch(removeFavorite(movie, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
