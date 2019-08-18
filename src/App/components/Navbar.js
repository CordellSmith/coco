import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li className="nav-home"><Link to="/"><span id="navbar-text">Home</span></Link></li>
      <li className="nav-portfolio"><Link to="/portfolio"><span id="navbar-text">Portfolio</span></Link></li>
      <li className="nav-about"><Link to="/about"><span id="navbar-text">About</span></Link></li>
      <li className="nav-contact"><Link to="/contact"><span id="navbar-text">Contact</span></Link></li>
    </ul>
  );
}

export default Navbar;