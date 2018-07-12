import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignUpRequest } from '../../helpers/apiCalls';
import * as actions from '../../Actions';

export class SignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      userName: '',
      email:'',
      password: '',
      failedSignUp: false,
      error: null
    };
  }

  handleChange=(event)=> {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit= async (event)=> {
    event.preventDefault();
    const { userName, email, password} = this.state;
    try {
      const newUserData = await userSignUpRequest( userName, email, password);
      this.props.handleUserSignUp(newUserData);
    } catch (error) {
      this.setState({ error, failedSignUp: true })
    }
    this.setState({userName: '', email: '', password: ''});
  }

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        { this.state.failedSignUp && <p>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="name" name="userName" value={this.state.userName}/>
          <input onChange={this.handleChange} type="text" placeholder="email" name='email' value={this.state.email}/>
          <input onChange={this.handleChange} type="password" placeholder="password" name='password' value={this.state.password}/>
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  userInfo: state.userInfo
});

export const mapDispatchToProps = (dispatch) => ({
  handleUserSignUp: (newUserData) => dispatch(actions.userSignUp(newUserData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  handleUserSignUp: PropTypes.func
};
