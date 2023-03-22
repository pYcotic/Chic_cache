const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const userRoutes = require('./routes/users')
const productRoutes = require('./routes/products')
const adminRoutes = require('./routes/index')

// Environmental variables from .env file
// fetch port or if no port is declared use port 3000
const PORT = process.env.PORT || 3000;
//fetch url
const URL = process.env.DATABASE_URL

// express app
const app = express();



// middleware
// log all requests paths and methods to console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
// load static files
app.use('/static', express.static('public'))

// routes
app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes)
app.use(adminRoutes)

// connect to db
mongoose.connect(URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`db connected & Server listening on port ${PORT}`);
        });
})
    .catch(err => console.log(err));





// express is listening on the port selected and will log which port it is listening to


// const mongoose = require('mongoose');
// require('dotenv').config();
//
// const DATABASE_URL = process.env.DATABASE_URL;
//
//
// mongoose.connect(DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true})
//     .then(() => console.log('Database connected successfully'))
//     .catch((err) => console.log('Database connection error: ', err));
//
//
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Connected to the database');
// });
