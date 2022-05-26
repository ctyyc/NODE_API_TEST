const express = require('express');
const app = express();
const router = express.Router();

const invest = require('./invest/accounts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/invest/accounts', invest);

module.exports = router;