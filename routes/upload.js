var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');

router.post('/image', isLoggedInMiddleware, function(req, res, next) {
    var sampleFile;

    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    sampleFile = req.files.sampleFile;
    sampleFile.mv('public/images/image1.jpg', function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
});

/* GET home page. */
router.get('/', isLoggedInMiddleware,function(req, res, next) {
    res.render('upload', { title: 'Uploading' });
});

router.post('/process', isLoggedInMiddleware, function(req, res, next) {
    var start_date = req.body.start_date,
        start_time = req.body.start_time,
        end_date = req.body.end_date,
        end_time = req.body.end_time,
        event = req.body.event,
        event_type = req.body.event_type,
        location = req.body.location,
        department = req.body.department,
        website = req.body.website;
    start_date = normalizeDate(start_date);
    end_date = normalizeDate(end_date);
    var row = [start_date, start_time, end_date, end_time, event, event_type, location, department, website];
    conn.query('INSERT INTO calendar VALUES (NULL, $1, $2, $3, $4, $5, $6, $7, $8, $9)', row, function (err) {
        if (err) {
            console.log('Failed to insert row in the database.');
            console.error(err);
            res.redirect("/upload-failure");
        } else {
            console.log("New event has been inserted into the database");
            res.redirect("/upload-success");
        }
    });
});



router.post('/logout', function(req, res, next) {
    console.log("reached post logout");
    req.session.destroy(function() {
        res.redirect("/login");
    });

});
function isLoggedInMiddleware(req, res, next) {
    console.dir("req's userID is " + req.userId);
    if (req.session.userId) {
        next();
    } else {
        console.log("redirecting to login");
        return res.redirect("/login");
    }
};

function normalizeDate(date) {
    // date is a string
    var len = date.length;
    var str1 = date.substring(len - 4, len);
    var str2 = date.substring(0, 2);
    var str3 = date.substring(3, 5);
    var res = str1.concat(str2, str3);
    var toReturn = parseInt(res);
    return toReturn;
}
module.exports = router;
