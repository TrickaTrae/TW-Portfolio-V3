import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
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
          </div>
      </div>
    </nav>
  );
};
export default NavBar;