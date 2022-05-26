const express = require('express');
const app = express();
const router = express.Router();

const invest = require('./invest/accounts');
const oauth = require('./oauth2.0');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/invest/accounts', invest);
router.use('/oauth/2.0', oauth);

module.exports = router;