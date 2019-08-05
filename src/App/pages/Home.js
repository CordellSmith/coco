import React from 'react';

import '../App.css';

import Footer from '../components/Footer';

function Home() {
  return(
    // Page Content
    <div className="w3-content" style={{maxWidth:'2000px', marginTop:'46px'}}>
            
    {/* The Home Section */}
    <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="home">
      <h2 className="w3-wide w3-text-white">WELCOME TO COCO WEB APPLICATION</h2>
      <p className="w3-opacity w3-text-white"><i>This is my first react app</i></p>
      <p className="w3-justify w3-text-white">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    {/* The Projects Section */}
    <div className="image-tile" id="portfolio">
      <div className="w3-container w3-content w3-padding-64" style={{maxWidth:'800px'}}>
          <h2 className="w3-wide w3-center">PORTFOLIO</h2>
          <p className="w3-opacity w3-center"><i>Working towards greatness</i></p><br/>
      </div>
    </div>

    {/* The About Section */}
    <div className="w3-black" id="about">
      <div className="w3-container w3-content w3-padding-64" style={{maxWidth:'800px'}}>
          <h2 className="w3-wide w3-center">ABOUT ME</h2>
          <p className="w3-opacity w3-center"><i>Working towards greatness</i></p><br/>
      </div>
    </div>
      
    {/* <!-- End Page Content --> */}
      <Footer/>
    </div>
  );
}

export default Home;