const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 1337;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
