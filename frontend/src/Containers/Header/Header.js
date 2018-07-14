import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

export const Header = props => {
  const { user } = props;

  return (
    <header className="header">
      <NavLink exact to="/">
        <h1>Movie Tracker</h1>
      </NavLink>
      <nav>
        {user.name && <p>Welcome back {user.name}</p>}
        <NavLink exact to="/login">Sign In</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.userInfo
});

export default connect(mapStateToProps)(Header);
