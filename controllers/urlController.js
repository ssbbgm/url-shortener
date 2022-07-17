const { json } = require('express');
const ShortUrl = require('../models/shortUrl');

module.exports = {

    //get all urls
    getUrls (req, res) {
        ShortUrl.find()
        .then((shortUrls) => res.render('index', { shortUrls: shortUrls}))
        // .then((shortUrls) => res.json(shortUrls))
        .catch((err) => res.status(500).json(err))
    },

    //get a single url to add to click count
    getSingleUrl (req, res) {
        ShortUrl.findOneAndUpdate(
            { shortUrl: req.params.short },
            { $inc : {'clicks' : 1 }},
            { new: true }
        )
        // .then(res.redirect( 'req.params.full' ))
        .catch((err) => res.status(500).json(err));
    },

    //create new url
    createUrl (req, res) {
        ShortUrl.create(req.body)
        .then((dbShortUrlData) => res.json(dbShortUrlData))
        .then(res.redirect('/'))
        .catch((err) => res.status(500).json(err));
    },

    //delete a url and associated data
    deleteUrl (req, res) {
        ShortUrl.findOneAndDelete({ _id: req.params._id })
        .then(() => res.json({ message: 'Url has been deleted deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
};