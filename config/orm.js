var connection = require("../config/config.js");

var orm = {
  //this will get all the burgers from the database so they can be displayed
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(tableInput, burgerType, cb) {
    //the will create a new burger in the database
    var queryString = "INSERT INTO " + tableInput + " SET ?";

    connection.query(
      queryString,
      {
        burger: burgerType[0],
        devoured: burgerType[1],
      },
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  update: function(tableInput, id, cb) {
    //this will change the burger seleceted from not being 'devoured' to being 'devoured' in the database
    var queryString = "UPDATE " + tableInput + " SET ? WHERE ?;";
    connection.query(queryString, [{ devoured: true }, { ID: id }], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
