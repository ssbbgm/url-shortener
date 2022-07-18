const { connect, connection } = require('mongoose');

connect('mongodb://localhost/urlShortner' || process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;