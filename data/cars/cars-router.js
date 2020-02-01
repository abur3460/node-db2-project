const router = require('express').Router();
const db = require('../dbConfig');

router.get('/', async (req, res) => {
    try {
    const cars = await db('cars');
    res.json(cars);
    } catch(err) {
        res.status(500).json({ message:'failed to get cars'});
    }
});

router.post('/', async (req, res) => {
    const carData = req.body;
    try {
        const newCar = await db('cars').insert(carData);
        res.status(201).json({message: 'created successfully'})
    } catch(err) {
         res.status(500).json({ message:'failed to create post'});
    }
});

module.exports = router;