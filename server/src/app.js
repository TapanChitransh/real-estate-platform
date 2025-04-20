// src/app.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const propertyRoutes = require('./routes/propertyRoutes.js');
app.use('/api/properties',propertyRoutes);


module.exports = app;

