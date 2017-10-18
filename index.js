var { HarperDB } = require("./HarperDB.js");
require('dotenv').load();

var db = new HarperDB();

db.connect(
  "http://localhost:9925",
  process.env.HARPERDB_USER,
  process.env.HARPERDB_PWRD
);
