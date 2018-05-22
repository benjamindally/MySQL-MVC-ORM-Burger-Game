var orm = require("../config/orm.js");

var burgers = {
  //this will call the selectAll function in the ORM to access the database
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  //this will call the create function in the ORM to access the database
  create: function(burgerType, cb) {
    var burgerType = burgerType;
    orm.create("burgers", burgerType, function(result) {
      cb(result);
    });
  },

  //this will call the update function in the ORM to access the database
  update: function(condition, cb) {
    var condition = condition;
    orm.update("burgers", condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;
