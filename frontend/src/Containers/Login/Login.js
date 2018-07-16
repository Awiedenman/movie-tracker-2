import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../Actions/index';
import { userLoginRequest, fetchUserFavorites } from '../../helpers/apiCalls';
import PropTypes from 'prop-types';
// import { fetchUserFavorites } from '../../helpers/apiCalls';

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
      console.log(user.data.id)
      this.props.handleUserLogin(user.data);
      this.retreiveUserFavorites(user.data.id)
      this.setState({ email: '', password: '' });
      this.props.history.push('/');
    } catch (error) {
      this.setState({ failedLogin: true, error, email: '', password: ''});
    }
  }

  retreiveUserFavorites = (user) => {
    try {
      fetchUserFavorites(user.data.id);
    } catch (error) {
      Error('Sorry, wecould not retreive your favorites at this time.');
    }
  }

  render() {
    const { email, password, error, failedLogin } = this.state;

    return (
      <section className="login">
        <h1 className="login__title">Sign In</h1>
        {failedLogin && <p className="login__error">{error.message}</p>}
        <form className="form"  onSubmit={this.handleSubmit}>
          <input type="text"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            className="form__input"
            required
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            className="form__input"
            required
          />
          <button className="form__button">Sign In</button>
        </form>
      </section>
    );
  }
}

export const maspStateToProps = ( state ) =>({
  userInfo: state.userInfo
});

export const mapDispatchToProps = dispatch => ({
  handleUserLogin: user => dispatch(userLogin(user))
});

Login.propTypes = {
  handleUserLogin: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);