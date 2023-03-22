const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    // Name
    name: String,
    // Price
    price: Number,
    // available
    available: Boolean,
    // ratings
    rating: Number,
    // description
    description: String,
    // images
    // work out schemas
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)