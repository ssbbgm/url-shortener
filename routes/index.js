const router = require('express').Router();
const {
   getUrls,
   getSingleUrl,
   createUrl,
   deleteUrl
} = require('../controllers/urlController');

router.route('/').get(getUrls).post(createUrl);


router.route("/shorten/:shortUrl").get(getSingleUrl);


router.route('/delete/:shortUrl').delete(deleteUrl);

module.exports = router;