// filepath: /Users/brenwarren/COURSE WORK/travel-app-capstone/src/server/server.js
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express and other modules to run server and routes
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));

const port = process.env.PORT || 3000; // Use dynamic port for tests

// GET route that returns the projectData object
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/add', (req, res) => {
    console.log('Incoming Data:', req.body); // Log the incoming data for debugging

    // Update projectData with incoming data
    projectData = {
        city: req.body.city || 'N/A',
        travelDate: req.body.travelDate || 'N/A',
        temperature: req.body.temperature || 'N/A',
        date: req.body.date || 'N/A',
        userResponse: req.body.feelings || 'N/A', // Corrected to match the client-side key
        longitude: req.body.longitude || 'N/A',
        latitude: req.body.latitude || 'N/A',
        country: req.body.country || 'N/A',
    };

    console.log('Updated projectData:', projectData); // Log the updated projectData for debugging
    res.send(projectData); // Send the updated projectData back to the client
});

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

// Only start the server if this file is executed directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on localhost:${port}`);
    });
}

module.exports = app;