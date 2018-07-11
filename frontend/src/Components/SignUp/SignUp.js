import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignUp extends Component {

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" name="" placeholder="email" />
          <input type="password" name="" placeholder="password" />
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
