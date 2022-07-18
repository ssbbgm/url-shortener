// const { connect, connection } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

let MONGODB_URI = 'mongodb://localhost/urlShortner' || process.env.MONGODB_URI;

MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection; 