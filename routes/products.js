const express = require('express');
const router = express.Router();

// get products
router.get('/', (req, res) => {
    res.json({mssg: "GET display all products"})
});

// get one product
router.get('/:id', (req, res) => {
    res.json({mssg: "GET display one product"})
});

// add new product
router.post('/:id', (req, res) => {
    res.json({mssg: "POST add a new product"})
});

// remove product
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE remove target item from db"})
});

// update product
router.put('/:id', (req, res) => {
    res.json({mssg: "PUT update target item on db"})
});

module.exports = router;