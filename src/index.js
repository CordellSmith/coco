import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';

const app = document.getElementById('root');

ReactDOM.render((
  <Router>
    <App />
  </Router>
), app);