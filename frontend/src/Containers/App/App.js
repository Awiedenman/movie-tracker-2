import React, { Component } from 'react';
import { movieFetch } from '../../helpers/apiCalls';

class App extends Component {
  constructor( props ){
    super( props );
  }

  async componentDidMount(){
    const initialFetch = await movieFetch();
    console.log(initialFetch);
  }
  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
}

export default App;
