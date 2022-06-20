/**
 * Subject Controller
 */

// Dependencies
const Subject = require('../models/Subject');

// Subject Controller Container
const SubjectController = {};

/**
 * @description Fetch all subjects
 * @api {GET} /api/subject/all/
 * @access Public
 */
SubjectController.fetchAllSubjects = async (req, res, next) => {
    try {
        const subjects = await Subject.find().lean();
        return res.status(200).json({
            message: 'Subjects fetched successfully',
            data: { subjects },
            success: true,
        });
    } catch (error) {
        return next(error);
    }
};

// Exporting Controller
module.exports = SubjectController;