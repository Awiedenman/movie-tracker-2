import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignIn extends Component {

  render() {
    return (
      <section>
        <h1>Sign In</h1>
        <form action="">
          <input type="text" name="" placeholder="email" />
          <input type="password" name="" placeholder="password" />
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}

export default SignIn;
