/**
 * Experiment Controller
 */

// Dependencies
const { isValidObjectId } = require('mongoose');
const Experiment = require('../models/Experiment');
const { ApiError } = require('../utils/custom.utils');

// Experiment Controller Container
const ExperimentController = {};

/**
 * @description Fetch all experiments belonging to a particular subject with subjectId
 * @api {GET} /api/experiment/all/:subjectId
 * @access Public
 */
ExperimentController.fetchExperimentsWithSubjectId = async (req, res, next) => {
    // Collecting Required information
    const { subjectId } = req.params;
    try {
        // Sanity Checking
        if (!subjectId) throw new ApiError({ message: 'Cannot fetch experiments without subject Id', statusCode: 400 });
        if (!isValidObjectId(subjectId)) throw new ApiError({ message: 'Given subject Id is invalid', statusCode: 422 });

        const experiments = await Experiment.find({ subject: subjectId }).populate('subject', 'name').lean();
        return res.status(200).json({
            message: 'Experiments fetched successfully',
            data: { experiments },
            success: true
        });
    } catch (error) {
        return next(error);
    }
};

// Exporting Controller
module.exports = ExperimentController;