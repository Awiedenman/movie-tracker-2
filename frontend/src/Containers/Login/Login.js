import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../Actions/index';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    // TODO make a call to props.handleLogin() here
    this.props.handleUserLogin(email, password);
    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Sign In</h1>
        <form  onSubmit={this.handleSubmit}>
          <input type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  handleUserLogin: (email, password) => dispatch(userLogin(email, password))
});


Login.propTypes = {

};

export default connect(null, mapDispatchToProps)(Login);