const express = require("express");
// const path = require("path");
// const db = require("./db/knex");
// const bodyParser = require("body-parser");
// const { usersRouter, authUserRouter } = require("./routers");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: "*/*" }));

//socket io stuff
const socketio = require("socket.io");
const server = require("http").createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  console.log("user connected");

  socket.on("change color", color => {
    console.log("Color changed to: ", color);
    io.sockets.emit("change color", color);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// app.get("/", (req, res) => res.json({ data: "hi" }));

// app.use((err, req, res, next) =>
//   res
//     .status(err.status || 500)
//     .json({ message: err.message || "Internal Server Error" })
// );

server.listen(8000, function() {
  console.log("Listening on port 8000");
});

// module.exports = app;
