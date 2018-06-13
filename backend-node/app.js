const express = require("express");
const db = require("./db/knex");
const app = express();
var http = require("http").Server(app);

app.get("/", function(req, res) {
  return res.send("<h1>Hello</h1>");
});

app.get("/test", function(req, res) {
  console.log("hello");
  return db("test")
    .then(results => {
      return res.json({
        result: results[0],
        backend: "nodejs"
      });
    })
    .catch(err => console.log(err));
});

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
