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
    const displayMoviesCards = this.props.movies.initialMovies.map(movie => (
      <Card 
        {...movie}
        key={movie.id}
      />
    ));

    return (
      <div>
        <h1>home</h1>
        {displayMoviesCards}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  initialFetchData: movies => dispatch(fetchInitialMovies(movies))
});

export const mapStateToProps = movies => ({
  movies
});

Home.propTypes = {
  initialFetchData: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
