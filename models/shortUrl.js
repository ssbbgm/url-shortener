const { Schema, model } = require('mongoose');
// const shortid = require('shortid');
const shortUrlGenerator = require('../utils/urlGenerator');


const shortUrlSchema = new Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortUrlGenerator
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

const ShortUrl = model('ShortUrl', shortUrlSchema)

module.exports = ShortUrl;