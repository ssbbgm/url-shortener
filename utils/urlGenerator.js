const shortId = require('shortid');

const shortUrlGenerator = ()  => {
    return `https://${shortId.generate()}`
}

module.exports = shortUrlGenerator;