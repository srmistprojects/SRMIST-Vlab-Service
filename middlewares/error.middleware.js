/**
 * Express Error handling middleware
 */

// Dependencies
const { ApiError } = require("../utils/custom.utils");

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            message: err.message,
            data: err.data,
            success: false,
        });
    };
    return res.status(500).json({
        message: 'Internal server error',
        data: {},
        success: false,
    });
};

module.exports = errorHandler;