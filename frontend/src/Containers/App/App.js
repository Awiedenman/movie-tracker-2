import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieFetch } from '../../helpers/apiCalls';
import { fetchInitialMovies } from '../../Actions';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor( props ){
    super( props );
  }
  async componentDidMount(){
    const initialFetch = await movieFetch();
    //cleaner goes here
    this.props.initialFetchData(initialFetch);
  }
  
  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  initialFetchData: ( movies ) => dispatch(fetchInitialMovies(movies))
});

export const mapStateToProps = (state) => ({
  initialMovies: state.initialMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  initialFetchData: PropTypes.func
};
