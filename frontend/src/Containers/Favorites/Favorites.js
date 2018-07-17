import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';

import './Favorites.css';

export class Favorites extends Component {
  toggleFavorite = (movie, userId) => {
    const { favorites } = this.props;
    const favoritedMovie = favorites.find(favorite => favorite.movie_id === movie.id);

    if (!favoritedMovie) {
      // postUserFavorites(movie, userId);
      // this.props.addFavorite(movie);
    } else {
      // TODO remove movie from db here
    }
  }

  render() {
    const { favorites, user } = this.props;

    const userFavorites = favorites.map(movie =>
      <Card
        movie={movie}
        key={movie.id}
        userId={user.id}
        toggleFavorite={this.toggleFavorite}
        favorites={favorites}
      />
    );

    if (!user.id) {
      return (
        <div className="home-container">
          <h2>Please Sign In/Sign Up to add Favorites</h2>
        </div>
      );
    }

    if (!favorites.length) {
      return (
        <div className="home-container">
          <h2>Please Add Favorites</h2>
        </div>
      );
    }

    return (
      <div className="favorite-container">
        {userFavorites}
      </div>
    );
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  user: state.userInfo,
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);
