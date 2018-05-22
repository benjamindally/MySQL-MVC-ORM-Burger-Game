var mysql = require("mysql");

var connection;

//if the database can, it will connect to JawsDB so it can be accessed from Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //if JawsDB is unavailable, use the local host
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "root",
    database: "burgers_db",
  });
}
//i dunno
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
