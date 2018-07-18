import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut, clearUserFavorites } from '../../Actions/index';
import PropTypes from 'prop-types';

import './Header.css';

export const Header = props => {
  const { user, signOut, clearUserFavorites } = props;

  return (
    <header className="header">
      <Link className="header__home-link" to="/">
        <h1>Movie Tracker</h1>
      </Link>
      <nav>
        {user.name && <p className="header__welcome-message">Welcome back {user.name}</p>}
        {user.id && !user.name && <p className="header__welcome-message">Thanks for signing up</p>}
        {
          user.id ?
            <div className="header__nav">
              <NavLink exact to="/favorites">Favorites</NavLink>
              <a className="sign-out" onClick={() => signOut() && clearUserFavorites()}>Sign Out</a>
            </div>
            :
            <div className="header__nav">
              <NavLink exact to="/login">Sign In</NavLink>
              <NavLink exact to="/sign-up">Sign Up</NavLink>
            </div>
        }
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
  clearUserFavorites: PropTypes.func
};

export const mapStateToProps = state => ({
  user: state.userInfo
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(userSignOut()),
  clearUserFavorites: () => dispatch(clearUserFavorites())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
