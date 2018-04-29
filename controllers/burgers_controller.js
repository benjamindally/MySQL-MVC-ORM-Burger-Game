var express = require("express");
var body = require("body-parser");

var routes = express.Router();

var burgers = require("../models/burger.js");

routes.get("/index", function(req, res) {
  var data = req.body;
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  console.log(data);
});

module.exports = routes;
