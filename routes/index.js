// const router = require('express').Router();
// const shortUrlRoutes = require('./shortUrlRoutes');

// router.use('/shortUrl', shortUrlRoutes);

// module.exports = router;


const router = require('express').Router();
const {
   getUrls,
   getSingleUrl,
   createUrl,
   deleteUrl
} = require('../controllers/urlController');

router.route('/').get(getUrls).post(createUrl);
// router.get('/', async (req, res) => {
//     const shortUrls = await ShortUrl.find()
//     res.render('index', { shortUrls: shortUrls});
// });

// router.post('/shortUrls', async (req, res) => {
//    await ShortUrl.create({ full: req.body.fullUrl})
//    res.redirect('/')
// });

router.route("/shorten/:shortUrl").get(getSingleUrl);
// router.get('/:shortUrl', async (req, res) => {
//    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
//    if (shortUrl == null) res.sendStatus(404)

//    shortUrl.clicks++
//    shortUrl.save()
//    res.redirect(shortUrl.full)
// });

router.route('/delete/:shortUrl').delete(deleteUrl);

module.exports = router;