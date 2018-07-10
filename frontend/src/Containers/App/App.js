import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { movieFetch } from '../../helpers/apiCalls';

class App extends Component {
  constructor( props ){
    super( props );
  }

  async componentDidMount(){
    // const initialFetch = await movieFetch();
  }
  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
}


export default  App;
