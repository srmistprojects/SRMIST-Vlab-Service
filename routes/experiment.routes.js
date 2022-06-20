/**
 * Experiment Routers
 */

// Dependencies
const Router = require('express').Router();
const experimentController = require('../controllers/experiment.controller');

Router.get('/all/:subjectId', experimentController.fetchExperimentsWithSubjectId);
Router.get('/:experimentId', experimentController.fetchExperimentWithExperimentId);

// Exporting Router
module.exports = Router;