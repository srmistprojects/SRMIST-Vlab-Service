/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const appRouter = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
const { ApiError, initializeApp } = require('./utils/custom.utils');
const { DB_URL, PORT, isProduction, CLIENT_URL } = require('./config');

// Initializing Express Application
const app = express();

// Setting up middleware
app.use(cors({
    optionsSuccessStatus: 200,
    origin: CLIENT_URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger(isProduction ? 'combined' : 'dev'));

// Application Router
app.use('/api/ping', (req, res) => {
    res.status(200).send('Server is up and running');
});
app.use('/api', appRouter);

// Error Handling Middlewares

// 404 Error
app.use((req, res, next) => {
    const error = new ApiError({ message: `The request ${req.originalUrl} does not exist in this server`, statusCode: 404 });
    return next(error);
});

// All Errors
app.use(errorHandler);

// Connecting to database and starting server
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((_) => {

    app.listen(PORT, () => {
        console.log('Successfully connected to Database!')
        console.log(`Server running at Port: ${PORT}`);
        initializeApp();
    });

}).catch((_) => {

    console.log('Unable to Connect to Database\nExiting App...');
    process.exit(1);

});
