var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('front_end/home');
});

//router.post('/month/:yearMonth', function(req, res, next) {
//    var yearMonth = req.params.yearMonth;
//    if (yearMonth.length != 6) {
//        res.json("ERROR: yearMonth has to be in the format of 201604");
//    }
//    // e.g.: yearMonth is 201605
//    var start = yearMonth.concat("00");
//    var startDay = parseInt(start);
//    var end = yearMonth.concat("31");
//    var endDay = parseInt(end);
//    if (startDay == NaN || endDay == NaN) {
//        res.json("ERROR: yearMonth has to be in the format of 201604");
//    }
//    conn.query("SELECT * FROM calendar WHERE (start_date >= $1 and start_date <= $2) or (end_date >= $3 and end_date <= $4)",
//        [startDay, endDay, startDay, endDay], function(err, result){
//            var rowCount = result.rowCount;
//            console.log(rowCount);
//            if (rowCount == 0) {
//                res.json("No results for the month");
//            } else if (!err) {
//                res.json(result);
//            } else {
//                res.json("ERROR OCCURED!");
//            }
//        });
//});

router.post('/month/:yearMonthDay', function(req, res, next) {
    var yearMonthDay = req.params.yearMonthDay;
    if (yearMonthDay.length != 8) {
        res.json("ERROR: yearMonthDay has to be in the format of 20160421");
    }
    // e.g.: yearMonth is 20160506
    var startDay = parseInt(yearMonthDay);
    console.log("yearmonthday is " +yearMonthDay);
    if (startDay == NaN ) {
        res.json("ERROR: yearMonthDay has to be in the format of 201604");
    }
    conn.query("SELECT * FROM calendar WHERE start_date >= $1 or end_date >= $2 ORDER BY start_date, start_time " +
        "LIMIT 20",
        [startDay, startDay], function(err, result){
            var rowCount = result.rowCount;
            if (rowCount == 0) {
                res.json("No results for the month");
            } else if (!err) {
                res.json(result);
            } else {
                res.json("ERROR OCCURED!");
            }
        });
});

router.post('/search', function(req, res, next) {
    //var word = req.params.word;
    var searchMsg = req.body.searchMsg;
    var toDB = "%"+searchMsg+"%";
    // COLLATE UTF8_GENERAL_CI should make search case insensitive.
    conn.query("SELECT * FROM calendar WHERE event_title COLLATE UTF8_GENERAL_CI LIKE $1 UNION " +
        "SELECT * FROM calendar WHERE event_description COLLATE UTF8_GENERAL_CI LIKE $2 UNION " +
        "SELECT * FROM calendar WHERE event_type COLLATE UTF8_GENERAL_CI LIKE $3 UNION " +
        "SELECT * FROM calendar WHERE location COLLATE UTF8_GENERAL_CI LIKE $4 UNION " +
        "SELECT * FROM calendar WHERE department COLLATE UTF8_GENERAL_CI LIKE $5", [toDB, toDB, toDB, toDB, toDB], function (err, result) {
        var rowCount = result.rowCount;
        console.log("there are " + rowCount + "search results");
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
