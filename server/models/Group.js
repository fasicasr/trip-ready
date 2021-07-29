const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true,
        unique: true,
        maxlength: 60,
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp),
    },
    endDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp),
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    suggestions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Suggestion'
        }
    ]
});

const Group = model('Group', groupSchema);

module.exports = Group;

//TODO add start and end dates