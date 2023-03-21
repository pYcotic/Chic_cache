const express = require('express');

// express app
const app = express();




// fetch port from .env file or if no port is declared use port 3000
const PORT = process.env.PORT || 3000;

// express is listening on the port selected and will log which port it is listening to
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

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
