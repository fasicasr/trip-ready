const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const suggestionSchema = new Schema({
    title: {
        type: String,
        minlength: 8,
        maxlength: 60
    },
    description: {
        type: String,
        maxlength: 240
    },
    suggestedUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    belongToGroup: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const Suggestion = model('Suggestion', suggestionSchema);

module.exports = Suggestion;