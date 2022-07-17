const shortId = require('shortid');

const shortUrlGenerator = () => {
    return `${shortId.generate()}`;
};

module.exports = shortUrlGenerator;