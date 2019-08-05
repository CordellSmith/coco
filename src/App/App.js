import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../App/pages/Home';
import Portfolio from '../App/pages/Portfolio'
import About from '../App/pages/About'
import Contact from '../App/pages/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <!-- Navbar --> */}
          <div className="w3-top">
              <div className="w3-bar w3-black w3-card">
                  <Link to="/"><span className="w3-bar-item w3-button w3-padding-large">HOME</span></Link>
                  <Link to="/portfolio"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">PORTFOLIO</span></Link>
                  <Link to="/about"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</span></Link>
                  <Link to="/contact"><span className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</span></Link>
                  <span className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search"></i></span>
              </div>
          </div>

          <Route path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          </Router>
          {/* <!-- Navbar on Small Screens --> */}
          <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:'46px'}}>
              <a href="#portfolio" className="w3-bar-item w3-button w3-padding-large">PORTFOLIO</a>
              <a href="#about" className="w3-bar-item w3-button w3-padding-large">ABOUT</a>
              <a href="#contact" className="w3-bar-item w3-button w3-padding-large">CONTACT</a>
          </div>
      </div>
    );
  }
}

export default App;