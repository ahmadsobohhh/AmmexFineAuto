const express = require('express');
const Car = require('../models/car'); // Adjust the path as necessary

const router = express.Router();

// Add a car
router.post('/', async (req, res) => {
    const newCar = new Car(req.body);
    try {
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