import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../Actions/index';
import { userLoginRequest } from '../../helpers/apiCalls';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      failedLogin: false
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
      this.setState({ failedLogin: true });
    }

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
  handleUserLogin: user => dispatch(userLogin(user))
});


Login.propTypes = {
  handleUserLogin: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);