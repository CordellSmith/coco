import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import Footer from './components/Footer'

import '../App/App.css';

function App() {
  return (
    <div className="coco-container">
      <div className="column left">
        <Navbar />
      </div>
      <div className="column right">
        <div className="coco-body">
          <Routes />
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;