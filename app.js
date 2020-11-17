// Npm Modules
const express = require('express');

// Outher Modules
const routes = require('./routes/index.js');

// App Module
const app = express();

// Config File
const config = require('./config.json');

// Routes
routes(app);

// Listening
app.listen(config.express.port, () => {
    console.log('Express server listening...')
});