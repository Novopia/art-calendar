var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('front_end/home');
});

router.post('/month/:yearMonth', function(req, res, next) {
    var yearMonth = req.params.yearMonth;
    if (yearMonth.length != 6) {
        res.json("ERROR: yearMonth has to be in the format of 201604");
    }
    // e.g.: yearMonth is 201605
    var start = yearMonth.concat("00");
    var startDay = parseInt(start);
    var end = yearMonth.concat("31");
    var endDay = parseInt(end);
    if (startDay == NaN || endDay == NaN) {
        res.json("ERROR: yearMonth has to be in the format of 201604");
    }
    conn.query("SELECT * FROM calendar WHERE (start_date > $1 and start_date < $2) or (end_date > $3 and end_date < $4)",
        [startDay, endDay, startDay, endDay], function(err, result){
            var rowCount = result.rowCount;
            console.log(rowCount);
            if (rowCount == 0) {
                res.json("No results for the month");
            } else if (!err) {
                res.json(result);
            } else {
                res.json("ERROR OCCURED!");
            }
        });
});

router.post('/search/:word', function(req, res, next) {
    var word = req.params.word;
    conn.query("SELECT * FROM calendar WHERE event_title LIKE $1", ["%"+word+"%"], function (err, result) {
        var rowCount = result.rowCount;
        console.log(rowCount);
        if (rowCount == 0) {
            res.json("No results");
        } else if (!err) {
            res.json(result);
        } else {
            res.json("ERROR OCCURED!");
        }
    });
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
