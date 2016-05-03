var express = require('express');
var router = express.Router();
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');
var sharp = require('sharp');

/* GET home page. */
router.get('/', isLoggedInMiddleware,function(req, res, next) {
    //res.render('upload', { title: 'Uploading' });

    types1 = ['Dance', 'Film', 'Literary_Art', 'Media Arts', 'Music', 'Theatre', 'Visual Art', 'Artist talk'];
    var renderArr1 = [];
    for (i in types1) {
        renderArr1.push({'type' : types1[i]})
    }


    types2 = ['Exhibit', 'Conference', 'Lecture', 'Performance',
        'Reading', 'Screening', 'Symposium'];
    var renderArr2 = [];
    for (i in types2) {
        renderArr2.push({'type' : types2[i]})
    }


    location = ['Science Library', 'Rock', 'CIT', 'Pembroke', 'Other'];
    var renderArr3 = [];
    for (i in location) {
        renderArr3.push({'location' : location[i]})
    }

    res.render("upload", {"event_types1" : renderArr1, "event_types2" : renderArr2, "usual_loc" : renderArr3 } );
});

router.post('/process', isLoggedInMiddleware, function(req, res, next) {
    var start_date = req.body.start_date,
        start_time = req.body.start_time,
        end_date = req.body.end_date,
        end_time = req.body.end_time,
        event_title = req.body.event_title,
        event_description = req.body.event_description,
        event_type = req.body.event_type,
        location = req.body.location,
        department = req.body.department,
        website = req.body.website;

    var sampleFile;
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
    sampleFile = req.files.sampleFile;
    console.log(sampleFile);
    console.log(event_type);
    imagePath = "public/images/image_" + start_time + "_" + event_title + "_original.jpg";
    smallImagePath = "public/images/image_" + start_time + "_" + event_title + ".jpg";
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
