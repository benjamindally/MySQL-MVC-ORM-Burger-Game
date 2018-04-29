var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
    //console.log(orm.selectAll("burgers"));
  },
};

module.exports = burgers;
