const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const pictureSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    description: {
        type: String,
        maxlength: 240
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    ownerName: {
        type: String,
        maxlength: 40
    },
    img: {
        data: Buffer,
        contentType: String
    }
});

const Picture = model('Picture', pictureSchema);

module.exports = Picture;