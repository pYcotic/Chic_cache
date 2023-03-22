const express = require('express');
const Product = require('../models/productModel')

const router = express.Router();

// get products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// get one product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.find({_id: req.params.id});
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

});

// add new product
router.post('/', async (req, res) => {
    // required variables
    const { name, price, available, rating, description } = req.body;
    // respond to required data by storing data or giving an error message to why it failed
    try {
        const product = await Product.create({ name, price, available, rating, description })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// remove product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.find({_id: req.params.id})
        await Product.deleteOne(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// update product
router.patch('/:id', (req, res) => {
    res.json({mssg: `PATCH update target item ${req.params.id} on db`})
});

module.exports = router;