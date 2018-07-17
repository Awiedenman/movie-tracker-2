import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
import { fetchUserFavorites } from '../../helpers/apiCalls';

export class Favorites extends Component {
  componentDidMount =  () => {
    const { user } = this.props;
    if (user.id) {
      fetchUserFavorites(user.id);
    }
  }

  render() {
    const { movies, user } = this.props;
    const userFavorites = movies.map(movie => <Card movie={movie.favorite} key={movie.id} userId={user.id}/>);

    if (!user.id) {
      return (
        <div className="home-container">
          <h2>Please Sign In/Sign Up to add Favorites</h2>
        </div>
      );
    }

    if (!movies.length) {
      return (
        <div className="home-container">
          <h2>Please Add Favorites</h2>
        </div>
      );
    }

    return (
      <div className="home-container ">
        {userFavorites}
      </div>
    );
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  user: state.userInfo,
  movies: state.favorites
});

export default connect(mapStateToProps)(Favorites);
