const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    groups: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Group'
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;