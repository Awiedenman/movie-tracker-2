import React, { Component } from 'react';
import { connect } from 'react-redux'
import { movieFetch } from '../../helpers/apiCalls';
import { fetchInitialMovies } from '../../Actions';

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

export default connect(null, mapDispatchToProps)(App);
