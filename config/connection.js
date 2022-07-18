const { connect, connection } = require('mongoose');

let MONGODB_URI = 'mongodb://localhost/urlShortner' || process.env.MONGODB_URI;

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;