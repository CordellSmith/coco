// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App/App';

// ReactDOM.render(<App />, document.getElementById('root'));

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => 
  res.redirect('/home')
);

app.get('/home', (req, res) => 
  res.send('<h1>Welcome!!</h1>')
);

app.get('/about', (req, res) => 
  res.send('Admin page')
);

// Prints a log once the server starts listening
app.listen(port, () => 
  console.log(`Server running on http://localhost:${port}/`))
;
