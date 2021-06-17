import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import SimpleMenu from './Menu';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      <h1 className="nav-bar-header">ENVIRONMENT</h1>
      {isLoggedIn ? (
        <div className="logged-in-links">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart</Link>
          <SimpleMenu />
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="not-logged-in-links">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/signup">Sign Up</Link>
          <SimpleMenu />
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
