import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
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