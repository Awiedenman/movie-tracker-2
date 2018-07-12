import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../Actions/index';
import { userLoginRequest } from '../../helpers/apiCalls';
import PropTypes from 'prop-types';

import './Login.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      failedLogin: false,
      error: null
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    const { email, password } = this.state;
    event.preventDefault();

    try {
      const user = await userLoginRequest(email, password);
      this.props.handleUserLogin(user);
    } catch (error) {

      this.setState({ failedLogin: true, error });
    }

    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password, error, failedLogin } = this.state;
    return (
      <section className="login">
        <h1>Sign In</h1>
        {failedLogin && <p>{error.message}</p>}
        <form className="form"  onSubmit={this.handleSubmit}>
          <input type="text"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            className="form__input"
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            className="form__input"
          />
          <button className="form__button">Sign In</button>
        </form>
      </section>
    );
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  handleUserLogin: user => dispatch(userLogin(user))
});


Login.propTypes = {
  handleUserLogin: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);