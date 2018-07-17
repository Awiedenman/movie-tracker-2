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
    return (
      <div className="home-container">
        {userFavorites}
      </div>
    );
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  movies: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  user: state.userInfo,
  movies: state.favorites
});

export default connect(mapStateToProps)(Favorites);
