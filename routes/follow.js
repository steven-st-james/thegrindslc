var express = require('express');
var router = express.Router();

/* GET follow page. */
router.get('/', function(req, res, next) {
  res.render('follow', { title: 'Follow' });
});

module.exports = router;
