// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'website' directory
app.use(express.static(path.join(__dirname, '../website')));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// GET route that returns the projectData object
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/add', (req, res) => {
    console.log('Incoming Data:', req.body);
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    };
    console.log('Updated projectData:', projectData);
    res.send(projectData);
});
  