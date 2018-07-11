import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { cleanMovieResponse } from '../../helpers/clean-responses';
import { fetchInitialMovies } from '../../Actions';
import { Card } from '../../Components/Card/Card';
import PropTypes from 'prop-types';

export class Home extends Component {
  constructor() {
    super();
  }


  async componentDidMount(){
    const initialFetch = await movieFetch();
    const movies = cleanMovieResponse(initialFetch);
    this.props.initialFetchData(movies);
  }

  render() {
    // console.log(this.props)
    const displayMoviesCards = this.props.movies.map(movie => (
      <Card
        {...movie}
        key={movie.id}
      />
    ));

    return (
      <div className='home-container'>
        <h1>home</h1>
        {displayMoviesCards}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
});

export const mapStateToProps = state => ({
  movies: state.initialMovies
});

Home.propTypes = {
  initialFetchData: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
