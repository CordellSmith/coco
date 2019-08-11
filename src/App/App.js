import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import Footer from './components/Footer'

import '../App/App.css';

function App() {
  return (
    <div className="coco-container">
      <div className="coco-header">
        <Navbar />
      </div>
      <div className="coco-body">
        <Routes />
      </div>
      <div className="coco-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;