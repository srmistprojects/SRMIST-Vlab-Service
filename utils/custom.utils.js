/**
 * Custom Utilities
 */

// Dependencies
const wakeDyno = require('woke-dyno');
const { SERVER_URL } = require('../config');

// Api Error Utility
class ApiError extends Error {
    constructor({ message = '', statusCode = 500, data = {} }) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
};

const initializeApp = async () => {
    wakeDyno({ url: SERVER_URL }).start();
}

module.exports = {
    ApiError,
    initializeApp
}