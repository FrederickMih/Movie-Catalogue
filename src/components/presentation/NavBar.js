import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

const NavBar = () => (
  <div>
    <nav className="navbar">
      <Link className="navbar-brand text-white" to="/"><h3>MOVIES</h3></Link>

      <Link to="/search" />
    </nav>
  </div>
);

export default NavBar;
