const io = require("./app.js").io;

module.exports = function(socket) {
  console.log("Socket Id " + socket.id);
};
