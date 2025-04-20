const mongoose = require('mongoose');
require('dotenv').config(); // make sure this is here
// import dotenv from 'dotenv';
// dotenv.config();



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
