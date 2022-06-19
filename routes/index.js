/**
 * Application Routers
 */

// Dependencies
const Router = require('express').Router();
const subjectsRouter = require('./subject.routes');
const experimentsRouter = require('./experiment.routes');

Router.use('/subject', subjectsRouter);
Router.use('/experiment', experimentsRouter);

// Exporting Router
module.exports = Router;