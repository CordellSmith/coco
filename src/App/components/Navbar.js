import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <Link to="/"><span className="w3-bar-item w3-button w3-padding-large">HOME</span></Link>
          <Link to="/portfolio"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">PORTFOLIO</span></Link>
          <Link to="/about"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</span></Link>
          <Link to="/contact"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</span></Link>
          <span className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search"></i></span>
        </div>
    </div>
  );
}

export default Navbar;