/**
 * Subject Routers
 */

// Dependencies
const Router = require('express').Router();
const subjectController = require('../controllers/subject.controller');

Router.get('/all', subjectController.fetchAllSubjects);

// Exporting Router
module.exports = Router;