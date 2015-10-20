var express = require('express');
var router = express.Router();

/* GET theband page. */
router.get('/', function(req, res, next) {
  res.render('theband', { title: 'The band' });
});

module.exports = router;
