// src/app.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const propertyRoutes = require('./routes/propertyRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
app.use('/api/properties',propertyRoutes);
app.use('/api/users',userRoutes);


module.exports = app;

