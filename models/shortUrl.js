const { Schema, model } = require('mongoose');
const shortId = require('shortid');


const shortUrlSchema = new Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

const ShortUrl = model('ShortUrl', shortUrlSchema)

module.exports = ShortUrl;