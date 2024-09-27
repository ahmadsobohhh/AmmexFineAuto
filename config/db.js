const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
=======

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahmadsoobh:Intel777!@carinfo.9qs8w.mongodb.net/?retryWrites=true&w=majority&appName=CarInfo', {
>>>>>>> ceb0472a225c0282756c5864017ddabf81caa17b
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;