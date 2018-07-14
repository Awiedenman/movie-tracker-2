import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut } from '../../Actions/index';
import PropTypes from 'prop-types';

import './Header.css';

export const Header = props => {
  const { user, signOut } = props;
  // console.log(props);
  return (
    <header className="header">
      <NavLink exact to="/">
        <h1>Movie Tracker</h1>
      </NavLink>
      <nav>
        {user.name && <p>Welcome back {user.name}</p>}
        {
          user.name ?
            <button className="sign-out" onClick={() => signOut()}>Sign Out</button>
            :
            <div>
              <NavLink exact className="sign-in" to="/login">Sign In</NavLink>
              <NavLink exact to="/sign-up">Sign Up</NavLink>
            </div>
        }
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func
};

export const mapStateToProps = state => ({
  user: state.userInfo
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(userSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
