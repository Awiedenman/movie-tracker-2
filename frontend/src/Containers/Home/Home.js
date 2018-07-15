import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies /*addFavorite*/} from '../../Actions';
import { Card } from '../../Components/Card/Card';
import PropTypes from 'prop-types';

import './Home.css';

export class Home extends Component {
  constructor() {
    super();
  }

  toggleFavorite = (id) => {
    console.log('id', id);
    // this.state.loggedIn && this.props.favorites(id) ;
    // : this.props.history.push('/sign-up');
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
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
  // favorites: id => dispatch(addFavorite(id))
});

export const mapStateToProps = state => ({
  movies: state.initialMovies
});

Home.propTypes = {
  initialFetchData: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
