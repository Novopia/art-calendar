var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');
var sharp = require('sharp');

/* GET home page. */
router.get('/', isLoggedInMiddleware,function(req, res, next) {
    //res.render('upload', { title: 'Uploading' });

    types1 = ['Dance', 'Film', 'Lit_Art', 'Media_Arts', 'Music',
              'Theatre', 'Vis_Art'];
    types2 = ['Artist_Talk', 'Exhibit', 'Lecture', 'Performance', 'Reading', 'Screening', 'Symposium'];
    var renderArr1 = [];
    for (i in types1) {
        renderArr1.push({'type' : types1[i]})
    }

    var renderArr2 = [];
    for (i in types1) {
        renderArr2.push({'type' : types2[i]})
    }

    location = [];
    conn.query("SELECT DISTINCT location, COUNT(*) FROM calendar GROUP BY location ORDER BY COUNT(*) DESC LIMIT 5",
        [], function(err, result){
            var rowCount = result.rowCount;
            console.log(rowCount);
            if (rowCount == 0) {
                console.log("No locations");
                var renderArr3 = [];
                renderArr3.push({'location': 'Other (Type New Location)'});
                res.render("upload", {"event_types1" : renderArr1, "event_types2": renderArr2, "usual_loc" : renderArr3 } );
            } else if (!err) {
                var rows = result['rows'];
                console.log(rows);
                for (var i in rows) {
                    location.push(rows[i]['location'])
                }
                var renderArr3 = [];
                for (i in location) {
                    renderArr3.push({'location' : location[i]})
                }
                renderArr3.push({'location': 'Other (Type New Location)'});
                res.render("upload", {"event_types1" : renderArr1, "event_types2": renderArr2, "usual_loc" : renderArr3 } );

            } else {
                console.log("ERROR OCCURED!");
            }
        });

});

router.post('/process', isLoggedInMiddleware, function(req, res, next) {
    var start_date = req.body.start_date,
        start_time = req.body.start_time,
        end_date = req.body.end_date,
        end_time = req.body.end_time,
        event_title = req.body.event_title,
        event_description = req.body.event_description,
        event_type1 = req.body.event_type1,
        event_type2 = req.body.event_type2,
        location = req.body.location,
        other_location = req.body.other_location,
        department = req.body.department,
        website = req.body.website;

    var event_type = event_type1 + " " + event_type2;

    if (location == "Other (Type New Location)") {
        location = other_location
    }

    var sampleFile;
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    sampleFile = req.files.sampleFile;
    console.log(sampleFile);
    console.log(event_type);
    event_title_parsed = event_title.split(' ').join('');
    start_time_parsed = start_time.split(':').join('');
    imagePath = "public/images/image_" + start_time_parsed + "_" + event_title_parsed + "_original.jpg";
    smallImagePath = "public/images/image_" + start_time_parsed + "_" + event_title_parsed + ".jpg";
    sampleFile.mv(imagePath, function(err) {
        if (err) {
            res.redirect("/upload-failure");
        } else {
            sharp(imagePath)
                .resize(240)
                .toFile(smallImagePath, function(err) {
                });
        }
    });

    start_date = normalizeDate(start_date);
    end_date = normalizeDate(end_date);
    var row = [start_date, start_time, end_date, end_time, event_title, event_description, event_type, location, department, website];
    conn.query('INSERT INTO calendar VALUES (NULL, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', row, function (err) {
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

router.post('/checkLogin', function(req, res, next){
    console.log("check login in server");
    console.log("user id in server now is " + req.session.userId);
    if (!req.session.userId) {
       res.json("false");
    } else {
        res.json("true");
    }
});

router.post('/logout', function(req, res, next) {
    console.log("reached post logout");
    req.session.userId = null;
    req.session.destroy(function() {
        res.redirect("/login/upload");
    });

});
function isLoggedInMiddleware(req, res, next) {
    console.dir("req's userID is " + req.session.userId);
    if (req.session.userId) {
        next();
    } else {
        // so after login, it knows to redirect by here to upload.
        req.session.action = "upload";
        console.log("redirecting to login");
        return res.redirect("/login/upload");
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