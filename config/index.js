/**
 * Application Configuration
 */

// Dependencies
const dotenv = require('dotenv');
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    console.log(dotenv.config({
        path: `.env.${process.env.NODE_ENV}`,
    }));
}


// Configuration Container
const configuration = {
    isProduction,
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
};

module.exports = configuration;