const express = require('express');
const app = express();
const port = 1337;

app.get('/', (req, res) => res.send(
    'Coco Express Server'
));

app.get('/home', (req, res) => res.send(
    'Home Page'
));

app.listen(port, () => console.log(`Coco Express Server running on port ${port}!`));