var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "172.0.0.1",
  user: "root",
  password: "root",
  database: "burgers_db",
});

module.exports = connection;
