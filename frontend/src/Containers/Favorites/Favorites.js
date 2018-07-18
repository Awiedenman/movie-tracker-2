import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUserFavorite  } from '../../helpers/apiCalls';
import { removeFavorite } from '../../Actions';
import Card from '../../Components/Card/Card';

import './Favorites.css';

export class Favorites extends Component {
  toggleFavorite = async (movie, userId) => {
    this.props.removeFavorite(movie);
    await deleteUserFavorite(movie.id, userId);
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
          <h2 className="error-message">Please Sign In/Sign Up to add Favorites</h2>
        </div>
      );
    }

    if (!favorites.length) {
      return (
        <div className="home-container">
          <h2 className="error-message">Please Add Favorites</h2>
        </div>
      );
    }

    return (
      <div className="home-container">
        {userFavorites}
      </div>
    );
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func
};

export const mapStateToProps = state => ({
  user: state.userInfo,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  removeFavorite: movie => dispatch(removeFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
