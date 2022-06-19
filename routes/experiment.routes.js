/**
 * Experiment Routers
 */

// Dependencies
const Router = require('express').Router();
const experimentController = require('../controllers/experiment.controller');

Router.get('/all/:subjectId', experimentController.fetchExperimentsWithSubjectId);

// Exporting Router
module.exports = Router;