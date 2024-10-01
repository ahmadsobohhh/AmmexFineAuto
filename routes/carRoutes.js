const express = require('express');
const Car = require('../models/car');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer storage and file naming
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Add a car with image upload
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const newCar = new Car({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            price: req.body.price,
            imageUrl: `/uploads/${req.file.filename}` // Store image URL
        });
        
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json(error);
    }
});


// Update a car
router.put('/:id', async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete a car
router.delete('/:id', async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;