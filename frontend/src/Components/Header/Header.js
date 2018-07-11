import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Movie Tracker</h1>
      <nav>
        <NavLink exact to="/login">Sign In</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </nav>
    </header>
  );
};

Header.propTypes = {

};

export default Header;
