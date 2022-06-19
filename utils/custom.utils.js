/**
 * Custom Utilities
 */

// Api Error Utility
class ApiError extends Error {
    constructor({ message = '', statusCode = 500, data = {} }) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
};

module.exports = {
    ApiError,
}