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

app.use((err,req,res,next) => {
    const statusCode = err?.statusCode || 500;
    const message = err?.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


module.exports = app;

