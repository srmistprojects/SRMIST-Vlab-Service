/**
 * Subject Model
 */

// Dependencies
const { Schema, model } = require('mongoose');
const shortId = require('shortid');

// Subject Schema
const SubjectSchema = new Schema({
    subjectId: {
        type: String,
        default: shortId.generate,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
    }
}, {
    strict: true,
});

// Subject Schema Methods
SubjectSchema.methods.createSlug = function () {
    this.slug = `${this.name.toLowerCase().replace(/\W/, '-')}`
};

// Hooks
SubjectSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.createSlug();
    }
    next();
});

// Subject Model
const Subject = model('Subject', SubjectSchema);

// Exporting Model
module.exports = Subject;
