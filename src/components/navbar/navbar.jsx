import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../../-global-state/actions/user-actions';
import './navbar.css';

const NavBar = props => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark">
      <Link to="/" className="navbar-brand">TW</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" name="toggle navbar">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ml-auto">
              <Link to="/blog" className="nav-item nav-link">Blog</Link>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
              {
                props.userLoggedIn &&
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle pointer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </div>
                  <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item text-white bg-dark" to="/admin">Admin</Link>
                    <Link className="dropdown-item text-white bg-dark" to="/user">User</Link>
                    <button className="dropdown-item text-white bg-dark pointer" onClick={() => props.signoutUser(localStorage.getItem("token"))}>Sign Out</button>
                  </div>
                </li>
              }
          </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
      userLoading: state.userState.userLoading,
      userLoggedIn: state.userState.userLoggedIn,
  }
}

export default connect(mapStateToProps, { signoutUser })(NavBar);