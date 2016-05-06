/**
 * Created by Ting on 5/5/16.
 */
var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');

router.get('/', isLoggedInMiddleware, function(req, res, next) {
    res.render('remove', { title: 'remove' });
});

router.post('/eventList', isLoggedInMiddleware, function(req, res, next) {

    conn.query("SELECT id, event_title, start_date, start_time, end_date, end_time, location " +
        "FROM calendar ORDER BY id DESC", function(err, result){
            var rowCount = result.rowCount;
            console.log(rowCount);
            if (rowCount == 0) {
                res.json("No events list available");
            } else if (!err) {
                res.json(result);
            } else {
                res.json("ERROR OCCURED in fetching event list!");
            }
        });
});

router.post('/delete', isLoggedInMiddleware, function(req, res, next) {
    var id = req.body.id;
    var dbSize=0;
    var dbSize2=0;
    console.log("id is " + id);
    conn.query('SELECT * FROM calendar', function(error, result) {
        dbSize = result.rowCount;
        console.dir("dbsize is " + dbSize);
        conn.query("DELETE FROM calendar WHERE id = $1 ",[id], function(err){
            if (err) {
                res.json("ERROR OCCURED when deleting the entry");
            } else {
                conn.query('SELECT * FROM calendar', function(error, result) {
                    dbSize2 = result.rowCount;
                    console.dir("dbsize2 l44 is " + dbSize2);
                    console.log("dbSize l45 " + dbSize);
                    if (dbSize2 == dbSize) {
                        res.json("Invalid input. Deletion refused by database.");
                    } else {
                        res.json("deletion was succesfull");
                    }
                });
            }
        });
    });

});

router.post('/logout', function(req, res, next) {
    console.log("reached post logout");
    req.session.destroy(function() {
        res.redirect("/login/remove");
    });

});
function isLoggedInMiddleware(req, res, next) {
    console.dir("req's userID is " + req.userId);
    if (req.session.userId) {
        next();
    } else {
        console.log("redirecting to login");
        return res.redirect("/login/remove");
    }
};
module.exports = router;