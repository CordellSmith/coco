import React from 'react';

import Routes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import '../App/App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;