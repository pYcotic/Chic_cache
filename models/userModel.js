const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    // Name
    name: String,
    // email & username
    email: String,
    // admin privilege
    admin: Boolean,
    // images
    // work out schemas
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)