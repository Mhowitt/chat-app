const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const port = process.env.PORT || 8000;
// const path = require("path");
// const db = require("./db/knex");
// const bodyParser = require("body-parser");
// const { usersRouter, authUserRouter } = require("./routers");

const app = express();

//socket io stuff

var server = require("http").createServer(app);
var io = socketio(server);

const socketManager = require("./socketManager");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../frontend-react/public/index.html"));
});

io.on("connection", socketManager);

server.listen(port, function() {
  console.log("Listening on port ", port);
});

module.exports.io;
