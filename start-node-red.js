const express = require('express');
const RED = require('node-red');

// Create an Express app
const app = express();

// Create the settings object
const settings = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: "./node-red/",
    flowFile: 'flows.json',
    functionGlobalContext: {} // Add any global context properties here
};

// Initialise the runtime with the Express app and settings
RED.init(app, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

// Start the Express app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Node-RED running on http://localhost:${PORT}/red`);
});

// Start Node-RED
RED.start();
