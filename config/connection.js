const { connect, connection } = require('mongoose');

connect('mongodb://localhost/urlShortner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;