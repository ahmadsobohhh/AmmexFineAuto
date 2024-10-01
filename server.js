const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const connectDB = require('./config/db');
const path = require('path'); // Add this
const multer = require('multer'); // Add this

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Set up static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/cars', carRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
