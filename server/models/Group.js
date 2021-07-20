const { Schema, model } = require('mongoose');

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