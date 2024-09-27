const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes'); // Adjust the path as necessary
const connectDB = require('./config/db'); // Import the connectDB function from db.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api/cars', carRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});