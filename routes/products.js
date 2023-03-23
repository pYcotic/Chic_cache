const express = require('express');
const {
    addProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/productController");

const router = express.Router();

// get products
router.get('/', getAllProducts);

// get one product
router.get('/:id', getOneProduct);

// add new product
router.post('/', addProduct);

// remove product
router.delete('/:id', deleteProduct);

// update product
router.patch('/:id', updateProduct);

module.exports = router;