/**
 * Created by Ting on 4/23/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('front_end/home');
});

module.exports = router;
