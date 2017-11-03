/**
 * Created by valhalla on 28/06/15.
 */
var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var _ = require("lodash");

app.use(bodyParser.json());

app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", express.static("public"));

app.get("/getLorem", function(request, response) {
  setTimeout(function(){
    var rand = Math.floor(Math.random() * 10);
      response.type("application/json");
      response.status(200);
      response.json(request.query);
  }, Math.floor(Math.random() * 10) % 3);
});

app.get("/getResult", function(request, response) {
  setTimeout(function(){
    var rand = Math.floor(Math.random() * 10);
    if (rand > 2) {
      response.type("application/json");
      response.status(200);
      response.json(request.query);
    } else {
      response.status(500);
      response.send("Unknown Error!");
    }
  }, Math.floor(Math.random() * 10) % 3);
});

app.post("/postResult", function(request, response) {
  setTimeout(function(){
    var rand = Math.floor(Math.random() * 10);
    if (rand > 2) {
      response.type("application/json");
      response.status(200);
      response.json(request.body);
    } else {
      response.status(500);
      response.send("Unknown Error!");
    }
  }, Math.floor(Math.random() * 10) % 3);
});

var port = 3000;
if (_.isString(process.argv[2])) {
  port = process.argv[2].split("-")[1];
}

app.listen(port, function() {
  console.log("server is listening on http://localhost:" + port);
  console.log("press CTRL + C to quit..");
  console.log("to start, type node index '-port number' (- port number is optional)");
});
