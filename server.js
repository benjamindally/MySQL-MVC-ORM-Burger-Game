var orm = require("./config/orm.js");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

//port used
var PORT = process.env.PORT || 8080;

//using body-parster with express
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//handlebars section
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//the route that will be followed
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
