import React, { Component } from 'react';
import { BounceLoader } from 'halogenium';

import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <BounceLoader color="#e50914" size="10rem" margin="4px" />
      </div>
    );
  }
}

export default Loader;