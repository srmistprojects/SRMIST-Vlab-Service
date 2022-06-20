/**
 * Subject Model
 */

// Dependencies
const { Schema, model } = require('mongoose');

// Subject Schema
const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    strict: true,
});

// Subject Model
const Subject = model('Subject', SubjectSchema);

// Exporting Model
module.exports = Subject;
