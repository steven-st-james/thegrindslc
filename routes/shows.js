/**
 * Created by sbrown on 10/7/15.
 */
var express = require('express');
var router = express.Router();

/* GET shows page. */
router.get('/', function(req, res, next) {
    res.render('shows', { title: 'Upcoming Shows' });
});

module.exports = router;
