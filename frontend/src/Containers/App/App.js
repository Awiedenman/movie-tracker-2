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

const mapDispatchToProps = dispatch => ({
  initialFetchData: ( movies ) => dispatch(fetchInitialMovies(movies))
});

const mapStateToProps = (state) => ({
  initialMovies: state.initialMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  initialFetchData: PropTypes.func
};
