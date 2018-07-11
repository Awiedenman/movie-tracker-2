import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      email:'',
      password: ''
    };
  }

  handleChange=(event)=> {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit=(event)=> {
    const { email, password} = this.state;
    event.preventDefault();
    this.props.handleUserSignUp(email, password);
    this.setState({email: '', password: ''});
  }

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="email" name='email' value={this.state.email}/>
          <input onChange={this.handleChange} type="password" placeholder="password" name='password' value={this.state.value}/>
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = (state) => {
  // userInfo: state.userInfo
};

export const mapDispatchToProps = (dispatch) => {
handleUserSignUp: (email, password) => dispatch( userSignUp(email, password)) 
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  handleUserSignUp: PropTypes.func
};
