/**
 * Experiment Model
 */

// Dependencies
const { Schema, model } = require('mongoose');
const shortId = require('shortid');

// Experiment Schema
const ExperimentSchema = new Schema({
    experimentId: {
        type: String,
        default: shortId.generate,
    },
    slug: {
        type: String,
    },
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
        link: {
            type: String,
        }
    }],
    references: [{
        link: {
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

// Experiment Schema Methods
ExperimentSchema.methods.createSlug = function () {
    this.slug = `${this.name.toLowerCase().replace(/\W/, '-')}`
};

// Hooks
ExperimentSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.createSlug();
    }
    next();
});

// Experiment Model
const Experiment = model('Experiment', ExperimentSchema);

// Exporting Model
module.exports = Experiment;
