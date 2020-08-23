const express = require("express");
const server = express();
const port = 5001;

server.use(express.static("/home/dci/Documents/simplewebsite/public"));

server.listen(port, function () {
  console.log(`Server is listening to the port ${port}`);
});