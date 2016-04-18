//// loader stuff
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://data/test.db');
//create table messages
conn.query("DROP table IF EXISTS calendar");
var sqlCreate = "CREATE TABLE calendar (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
    "start_date TEXT, " +
    "start_time TEXT, " +
    "end_date TEXT, " +
    "end_time TEXT, " +
    "event_name TEXT, " +
    "event_type TEXT, " +
    "location TEXT, " +
    "department TEXT," +
    "website_link TEXT);";
conn.query(sqlCreate, function () {
    console.dir("Made table calendar!");
});

