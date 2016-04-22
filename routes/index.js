var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload-success', function(reg, res, next) {
    //console.log("upload-success");
    //res.send("upload-success");
    res.render('upload-success', { title: 'The upload was successful!' });
});

router.get('/upload-failure', function(reg, res, next) {
    //res.send("upload-failure");
    res.render('upload-success', { title: 'The upload failed.' });
});

module.exports = router;
