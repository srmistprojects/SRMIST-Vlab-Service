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
    aim: [{
        text: {
            type: String
        },
        image: {
            type: String
        },
    }],
    theory: [{
        text: {
            type: String
        },
        image: {
            type: String
        },
    }],
    procedure: [{
        text: {
            type: String
        },
        image: {
            type: String
        },
    }],
    observation: [{
        text: {
            type: String
        },
        image: {
            type: String
        },
    }],
    simulation: {

    },
    videos: [{
        text: {
            type: String,
        }
    }],
    references: [{
        text: {
            type: String,
        }
    }],
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