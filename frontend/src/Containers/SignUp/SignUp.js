import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      name: '',
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
    this.setState({name: '', email: '', password: ''});
  }

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="name" name="name" value={this.state.name}/>
          <input onChange={this.handleChange} type="text" placeholder="email" name='email' value={this.state.email}/>
          <input onChange={this.handleChange} type="password" placeholder="password" name='password' value={this.state.value}/>
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = (state) => {
  userInfo: state.userInfo
};

export const mapDispatchToProps = (dispatch) => ({
  handleUserSignUp: (name, email, password) => dispatch( userSignUp(name, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  handleUserSignUp: PropTypes.func
};
