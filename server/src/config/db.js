const mongoose = require('mongoose');
//require('dotenv').config(); // make sure this is here

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.hfp8xnr.mongodb.net/realestate?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
