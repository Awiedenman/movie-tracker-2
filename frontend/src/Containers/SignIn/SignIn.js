import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // TODO make a POST request here

    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Sign In</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <input type="text" value={email} name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" value={password} name="password" placeholder="password" />
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}

export default SignIn;
