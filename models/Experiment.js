/**
 * Experiment Model
 */

// Dependencies
const { Schema, model } = require('mongoose');

// Experiment Schema
const ExperimentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    aim: {
        type: String,
        required: true,
    },
    theory: {
        type: String,
        required: true,
    },
    procedure: {
        type: String,
        required: true,
    },
    observation: {
        type: String,
        required: true,
    },
    videos: {
        type: String,
    },
    references: {
        type: String,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
    }
}, {
    strict: true,
});

// Experiment Model
const Experiment = model('Experiment', ExperimentSchema);

// Exporting Model
module.exports = Experiment;