/**
 * Created by Ting on 4/18/16.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.post('/validityCheck', function(req, res, next) {
    console.log("inside validity check");
    var userName = req.body.userName,
        password = req.body.password;
    if (userName == "Arts@Brown" && password == "Arts@BrownU_2016") {
        console.log("user is valid");
        // Regenerating in each login
        req.session.regenerate(function() {
            req.session.userId = "ABC123";
            return res.redirect("/upload");
        });
    } else {
        res.send("Access denied");
    }

});
module.exports = router;